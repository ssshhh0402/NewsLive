<template>
    <v-toolbar class ="back_g" max-height="65"  dark> 
        <v-btn text="text"><v-toolbar-title @click=goHome()>NEWS</v-toolbar-title></v-btn>
        <v-divider class="mx-4" vertical="vertical"></v-divider>
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
            <v-btn v-if="$store.state.isSigned" text="text" @click = goLogout(); >
                Logout
            </v-btn>
        </v-toolbar-items>
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
            onFailure() {
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
<style >
.back_g{background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	}</style>