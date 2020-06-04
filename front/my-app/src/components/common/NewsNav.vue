<template>
    <v-toolbar max-height="65" color="purple" dark="dark">
        <v-toolbar-title>NEWS</v-toolbar-title>
        <v-divider class="mx-4" vertical="vertical"></v-divider>
        <span class="subheading" @click = goHome(); >My Home</span>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            
            <v-divider vertical="vertical"></v-divider>

            <v-btn text="text" @click = goNewsList()> 
                SNS News
            </v-btn>

            <v-divider vertical="vertical"></v-divider>
            <v-btn text="text" v-if="$store.state.isSigned" @click = goWrite();>
                Write
            </v-btn>
            <v-divider vertical="vertical"></v-divider>
            
            <v-btn v-if="!$store.state.isSigned" text="text">
                <KakaoLogin 
                image="kakao_login_btn_medium_ov"
                api-key="8ed60517a6ddc7531af7f7fd4740b174"
                :on-success=onSuccess
                :on-failure=onFailure
                />
            </v-btn>
            
            <v-btn v-if="$store.state.isSigned" text="text" @click = goMypage(); >
                MyPage
            </v-btn>
            <v-divider vertical="vertical"></v-divider>
            <v-btn text="text" v-if="$store.state.isSigned" @click = goAd();>
                AdPage
            </v-btn>
            <v-divider vertical="vertical"></v-divider>
            <v-btn v-if="$store.state.isSigned" text="text" @click = goLogout(); >
                Logout
            </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>
</template>
<script>
    import KakaoLogin from 'vue-kakao-login' 
    export default {
        components: {
            KakaoLogin
        },
        data() {
            return {
                user: {
                    login_fail: false
                },
                };
        },
        computed: {
            // ...mapState([ "isLogin", "isLoginError", "isDialog"])
        },
        methods: {
            onSuccess(data) {
                const scope = this;
                localStorage.setItem("access_token1", data.access_token)
                scope.$store.dispatch("getMemberInfo");
            },
            onFailure(data) {
                console.log(data)
                console.log("failure")
            },
            goHome(){
                this.$router.push({path:'/'})
            },
            goWrite(){
                this.$router.push({path:'/news'})
            },
            goMypage()
            {   
                this.$router.push({path:'/mypage'})
            },
            goAd(){
                this.$router.push({path:'/advertisement'})    
            },
            goNewsList()
            {   
                this.$router.push({path:'/SnsNews'})
            },
            goLogout()
            {   
                this.$router.push({path:'/logout'})
            },

            loginClear() {
                this.dialog = false;
            }, 
            
        }
    }
</script>