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
        }
    },
    actions: {
        getMemberInfo({commit}) {
            let token = localStorage.getItem("access_token1");
            // console.log("token=" , token);
            if (!token) {
                return;
            } else {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        commit("setIsSigned", true);
                        var mail = res.kakao_account.email
                        var id1 = res.id 
                        var name1 = res.kakao_account.profile.nickname
                        var role1 = "JOURNALIST";
                        var picture2 = '';
                        if (res.kakao_account.profile.profile_image_url) {
                            picture2 = res.kakao_account.profile.profile_image_url;
                        }
                        else
                        {
                            picture2 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png";
                            res.kakao_account.profile.profile_image_url = picture2;
                        }
                        commit("setUserInfo", res);
       
                        axios.post(API_BASE_URL + "/api/v1/user", {
                            email: mail,
                            id: id1,
                            name: name1,
                            role: role1,
                            picture: picture2
                        })
                        
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
            
            // window.Kakao.Auth.logout({
            //     success: function (authObj) {
            //         window.Kakao.init('/');
            //         window.Kakao.API.request({url: '/v1/user/unlink'});
            //         console.log(authObj)
            //     }
            // })
        }
    },
    modules: {}
});
