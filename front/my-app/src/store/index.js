import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"; 
// import { API_BASE_URL } from "../config";
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
        },
        setUserInfo(state,sGet)
        {
          state.UserInfo = sGet;
        }
    },
    actions: {
        getMemberInfo({commit}) {
            let token = localStorage.getItem("access_token1");
            console.log("token=" , token);
            if (!token) {
                return;
            } else {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        console.log(res);
                        commit("setUserInfo", res);
                        commit("setIsSigned", true);
                    },
                    fail: function (error) {
                        alert(JSON.stringify(error));
                    }
                });
                // axios({
                //     url: 'https://kapi.kakao.com/v2/user/me',
                //     method: 'GET',
                //     headers: {
                //         'Authorization': ' KakaoAK  {' + token + '}'
                //     },
                // })
                // .then((result) => {
                //     console.log(result)
                // })
                // .catch((err) => {
                //     console.log(err);
                // })
                //kakao.api.request 'authorization' : 'bearer {' + accesstoken + '}',
            //     window.Kakao.API.request({
            //       url: '/v2/user/me',
            //       // url: '/v2/user/me',
            //         success: function (response) {
            //         console.log(response);
            //       },
            //       fail: function (error) {
            //         console.log(error);
            //       }
            //   });
            }
        }
        , getKakaoLogout({ commit }) {
            commit("logout");
            window.Kakao.API.request({
                url: '/v1/user/unlink',
                success: function (response) {
                    console.log(response);
                },
                fail: function (error) {
                    console.log(error);
                },
            });
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout(function () {

            });
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
