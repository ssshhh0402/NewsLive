<template>
    <v-toolbar class ="back_g" max-height="65"  dark> 
        <v-btn text="text"><v-toolbar-title @click=goHome()>NEWS</v-toolbar-title></v-btn>
        <v-divider class="mx-4" vertical="vertical"></v-divider>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            
            <v-divider vertical="vertical"></v-divider>

            <v-btn text="text" v-if="$store.state.isSigned" @click = goNewsList()> 
                SNS News
            </v-btn>

            <v-divider vertical="vertical"></v-divider>
            <v-btn text="text" v-if="$store.state.isSigned&&$store.state.UserInfo.role1==='JOURNALIST'" @click = goWrite();>
                Write
            </v-btn>
            <v-dialog v-if="$store.state.isSigned&&$store.state.UserInfo.role1==='USER'" v-model="dialog" persistent max-width="30%">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        text="text"
                        >
                        Write
                        </v-btn>
                    </template>
                    <v-card class="align-center" align-center="align-center">
                        <v-card-title class="headline" style="padding-top:35px;padding-left:7vw;"><sapn class="  font-weight-bold "
              style="font-size:35px; color : #000046;">기자 활동하시겠습니까?</sapn></v-card-title>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-card style="margin-top:3vw">
                            <p>모든 기자활동은 블록체인에 저장됩니다.</p>
                            <p>모든 기사에 대한 생성, 수정, 삭제에 대한 이력이 블록체인에 저장됩니다. </p>
                            <p>이러한 이력을 통해 구독자로 부터 신고 및 평가를 받을 수 있습니다. </p>
                            <p>기사 무단 복제, 선정적 기사, 허위 기사, 광고 기사 등의 작성을 통한 플랫폼 사용 제한이 될 수 있습니다.</p>
                            <p style="color:#EF2A3F;"><strong>수정 및 삭제 이력 데이터 제거는 불가능 하며, 모든 데이터는 법적 증거로 활용 될 수 있습니다.</strong></p>
                            </v-card>
                            
                        </v-card-text>
                        <v-card-actions class="align-center text-center" style="" align-center="align-center">
                        <div align-center="align-center" style="margin:auto">
                            <v-checkbox v-model="checkbox1" :label="`동의 하십니까?`"></v-checkbox>
                        
                        <v-btn color="green darken-1" text @click="putRole()">확인</v-btn>
                        <v-btn color="green darken-1" text @click="dialog = false">취소</v-btn>
                        </div>
                        </v-card-actions>
                    </v-card>
            </v-dialog>
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
    import { API_BASE_URL } from "../../config";
    import axios from 'axios';
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
                dialog: false,
                checkbox1: false,
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
            putRole(){
                const email = this.$store.state.UserInfo.kakao_account.email;
                if(!this.checkbox1){
                    alert(`동의를 눌러 주세요!`);
                    return;
                }
                axios
                .put(`${API_BASE_URL}/api/v1/user/role/${email}/JOURNALIST`)
                .then(response=>{
                    console.log(response.data);
                    this.dialog=false;
                    this.goWrite();
                })
            }
        }
    }
</script>
<style >
.back_g{background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	}</style>