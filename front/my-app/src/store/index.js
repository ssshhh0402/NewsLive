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
