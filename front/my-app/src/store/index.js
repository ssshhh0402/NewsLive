import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"; 
import { API_BASE_URL } from "../config";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSigned: false,
        isManager: false,
        UserInfo : {},
        FollowInfo :{},
        AllInfo:{}
    },
    mutations: {
        setIsSigned(state, isSigned) {
            state.isSigned = isSigned;
        },
        setIsManaged(state, isManager) {
            state.isManager = isManager;
        },
        logout(state) {
            state.isManager = false;
            state.isSigned = false;
            localStorage.clear()
            // console.log("클리어 되었습니다.")
        },
        setUserInfo(state,sGet)
        {
          state.UserInfo = sGet;
        },
        setFollowInfo(state,followInfo)
        {
            state.FollowInfo = followInfo
            console.log(state.FollowInfo )
        },
        setAllInfo(state, allInfo) {
            state.AllInfo = allInfo
            console.log("mutation",state.AllInfo)
        }
    },
    actions: {
        
        getAllInfo({ commit }) {
            const email = this.state.UserInfo.kakao_account.email;
            const url = API_BASE_URL + "/api/v1/posts/EveryThing/" + email
            console.log("URL : ", url);
            axios
                .get(API_BASE_URL + "/api/v1/posts/EveryThing/" + email)
                .then(response => {
                    var allInfo = response.data;
                    console.log("allInfo", allInfo);
                    commit("setAllInfo", allInfo)
                }).catch(e => {
                    console.error(e);
                })
        }
        ,
        getFollowInfo({commit})
        {
            const email = this.state.UserInfo.kakao_account.email;
            axios
            .get(API_BASE_URL + "/api/v1/user/follow/" + email)
            .then(response => {
                var follows = response.data.following;
                console.log(follows);
                commit("setFollowInfo", follows)
            }).catch(e => {
                console.error(e);
            })
        },
        getMemberInfo({commit}) {
            let token = localStorage.getItem("access_token1");
            // console.log("token=" , token);
            if (!token) {
                return;
            } else {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        
                        var role1 = "USER"
                        var mail = res.kakao_account.email
                        var id1 = res.id
                        var name1 = res.kakao_account.profile.nickname
                        if (!mail) {
                            mail = id1 + "@NewsLive.com"
                        }
                        var picture2 = '';
                        if (res.kakao_account.profile.profile_image_url) {
                            picture2 = res.kakao_account.profile.profile_image_url;
                        }
                        else {
                            picture2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png";
                            res.kakao_account.profile.profile_image_url = picture2;// 이건 물음표 
                        }
                        
                        //////// 유저인지 기자인지 확인. /api/v1/user/find/{email}
                        axios.get(API_BASE_URL + "/api/v1/user/find/" + mail)
                            .then(res1 => {
                                console.log("find ,T/F ",res1)
                                //유저가 있다면, user인지 저지 인지 가져옴.
                                if (res1.data == true) {
                                    axios.get(API_BASE_URL + "/api/v1/user/" + id1)
                                        .then(res2 => {
                                            console.log("role정보", res2);
                                            role1 = res2.data.role;
                                            axios.post(API_BASE_URL + "/api/v1/user", {
                                                email: mail,
                                                id: id1,
                                                name: name1,
                                                role: role1,
                                                picture: picture2
                                            })
                                        })
                                }
                            })
                        commit("setIsSigned", true);
                        alert("로그인에 성공하였습니다.")
                        commit("setUserInfo", res);
                    },
                    fail: function (error) {
                        console.log(JSON.stringify(error));
                    }
                });
            }
        }

        , getKakaoLogout({ commit }) {
            commit("logout");
            window.Kakao.API.request({
                url: '/v1/user/unlink',
                success: function (response) {
                    console.log("vl/user/unlink",response);
                    // window.Kakao.Auth.logout(function () { });
                },
                fail: function (error) {
                    console.log(error);
                },
            });
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
        }
    },
    modules: {}
});
