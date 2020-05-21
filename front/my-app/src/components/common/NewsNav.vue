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
            <v-btn text="text"
                   @click.stop="dialog = true"
            >
                KaKao Login
            </v-btn>
            <!-- <v-dialog v-model="dialog" max-width="520">
                <v-card>
                    <v-toolbar flat="flat">
                        <v-card-title class="headline">News Login</v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="icon" dark="dark" @click="loginClear()">
                            <v-icon color="black darken-2">mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <div class="pa-3" style="max-width: 540px">
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <v-row>
                                <KakaoLogin
                                    api-key="8ed60517a6ddc7531af7f7fd4740b174"
                                    image="kakao_account_login_btn_medium_narrow_ov"
                                    :on-success="onSuccess"
                                    :on-failure="onFailure"/>
                            </v-row>
                            <v-btn
                                class="mb-1"
                                depressed="depressed"
                                block="block"
                                large="large"
                                @click="loginClear">취소</v-btn>
                            <v-sheet v-if="user.login_fail" color="orange lighten-2">존재하지 않는 아이디이거나 비밀번호가 틀립니다.</v-sheet>
                        </v-card-text>
                    </div>
                </v-card>
            </v-dialog> -->
            <v-divider vertical="vertical"></v-divider>
        </v-toolbar-items>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>
</template>
<script>
    // import KakaoLogin from 'vue-kakao-login' 
    // import { mapState } from "vuex";
    export default {
        components: {
            // KakaoLogin
        },
        data() {
            return {dialog: false};
        },
        computed: {
            // ...mapState([ "isLogin", "isLoginError", "isDialog"])
        },
        methods: {
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