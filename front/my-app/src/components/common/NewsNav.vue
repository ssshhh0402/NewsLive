<template>
    <v-toolbar max-height="65" color="purple" dark="dark">
        <v-toolbar-title>NEWS</v-toolbar-title>
        <v-divider class="mx-4" vertical="vertical"></v-divider>
        <span class="subheading">My Home</span>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text="text">
                News
            </v-btn>

            <v-divider vertical="vertical"></v-divider>

            <v-btn text="text">
                <router-link class="nav-contents highlight" to="/news">Write
                            </router-link>
            </v-btn>
            <v-divider vertical="vertical"></v-divider>
            <v-btn v-if="!$store.state.isSigned" text="text" @click.stop="dialog = true">
                KaKao Login
            </v-btn>
            <v-dialog v-model="dialog" max-width="520">
                <v-card>
                    <v-toolbar flat="flat">
                        <v-card-title class="headline justify-center">로 그 인</v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="icon" dark="dark" @click="loginClear()">
                            <v-icon color="black darken-2">mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <div class="pa-3" style="max-width: 540px">
                        <v-card-text>
                            <v-container>
                                <v-text-field label="Email*" required="required" v-model="user.email"></v-text-field>
                                <v-text-field
                                    label="Password*"
                                    type="password"
                                    required="required"
                                    v-model="user.password"
                                    @keyup.enter="login">
                                </v-text-field>
                            </v-container>
                            <v-spacer></v-spacer>
                            <v-btn
                                class=" mt-1"
                                depressed="depressed"
                                block="block"
                                color="rgba(0, 170, 179)"
                                large="large"
                                dark="dark"
                                @click="login">로그인</v-btn>
                                 <v-row> 
                                        <v-col  cols='12' sm="6"> 
                                        <!-- 카카오 -->
                                        <KakaoLogin
                                        api-key="d067985a2434ec54d14813168409e137"
                                        image="kakao_account_login_btn_medium_narrow_ov"
                                        :on-success=onSuccess
                                        :on-failure=onFailure
                                        />
                                        <!-- <v-img src ="../../assets/kakao_s.png"    
                                         depressed="depressed"  
                                         block="block"
                                         height="45px"
                                         @click="kakaoLogin()"></v-img> -->
                                         </v-col>
                                        <!-- 네이버 -->
                                        <v-col  cols='12' sm="6">                                        
                                        <a :href=naverLoginURL>
                                        <img  
                                        height="48px" 
                                        src="https://developers.naver.com/doc/review_201802/CK_bEFnWMeEBjXpQ5o8N_20180202_7aot50.png"/>
                                        </a>
                                        </v-col>
                                        </v-row>
                                <v-btn
                                class="mb-1"
                                depressed="depressed"
                                block="block"
                                large="large"
                                @click="loginClear">취소</v-btn>
                        </v-card-text>
                    </div>
                </v-card>
            </v-dialog>
            <v-divider vertical="vertical"></v-divider>
        </v-toolbar-items>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>
</template>
<script>
    import KakaoLogin from 'vue-kakao-login' 
    import axios from "axios";
    import { API_BASE_URL } from '../../config'
    import {login} from "../../api/user.js";
    import EventBus from "../../EventBus"
    // import { mapState } from "vuex";
    export default {
        components: {
            KakaoLogin
        },
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                    login_fail: false
                },

                dialog: false
                };
        },
        computed: {
            // ...mapState([ "isLogin", "isLoginError", "isDialog"])
        },
        methods: {
            onSuccess(data) {
                const scope = this;
                console.log(data)
                console.log("success")
                console.log(data.access_token) 
                localStorage.setItem("access_token1", data.access_token)
                // data.token은 카카오에서 받은것. 
                axios
                .get(API_BASE_URL+"/api/kakao/login", {
                    headers: {
                        "jwt-auth-token":data.access_token
                    }
                })
                 .then(response => {
                    console.log("정원",response);
                    alert("카카오 로그인에 성공하셨습니다.")
                    localStorage.setItem("access_token", response.data)
                     scope
                        .$store
                        .dispatch("getMemberInfo")
                 }); 
                scope.dialog.login = false;
            },
            onFailure(data) {
                console.log(data)
                console.log("failure")
            },

            login: function () {
                const scope = this;
                login(scope.user.email, scope.user.password, function (response) {
                    let token = response.data.auth_token;

                    localStorage.setItem("access_token", token)
                    scope
                        .$store
                        .dispatch("getMemberInfo")

                    EventBus.$emit("login-success");

                    scope.dialog.login = false;
                }, function (error) {
                    // alert("유저 이메일 혹은 비밀번호가 일치하지 않습니다.");
                    scope.user.login_fail = true;
                    console.error(error);
                });
            },

            loginClear() {
                this.dialog = false;
            }, 
            // onSuccess(data) {
            //     console.log(data)
            //     console.log("success")
            // },
            // onFailure(data) {
            //     console.log(data)
            //     console.log("failure")
            // },    
        }
    }
</script>