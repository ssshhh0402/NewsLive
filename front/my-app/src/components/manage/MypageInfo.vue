<template>
    <div>
        <h2 class= "mt-3 text-center">내 정보
        </h2>
        <v-row class ="mb-3">
            <v-card class="mx-auto " max-width="434" tile="tile">
                <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                    <v-row align="end" class="fill-height">
                        <v-col align-self="start" class="pa-0" cols="12">
                            <v-avatar class="profile" color="grey" size="164" tile="tile">
                                <v-img src="https://postfiles.pstatic.net/MjAyMDA1MjhfNDgg/MDAxNTkwNjQxODI2MDcy.HEkAfaUwM375cpxm_k_KK1nRbUSmLeYsw6IEiGuLZ68g.rOLbtyQkI1gMk0o5RgRCj-RzQgJWfSXmwEmlL0xXMM8g.PNG.koo_m/image.png?type=w966"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                            <v-list-item color="rgba(0, 0, 0, .4)" dark="dark">
                                <v-list-item-content>
                                    <v-list-item-title class="title">이름:
                                       {{user.kakao_account.profile.nickname}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>이메일:
                                       {{user.kakao_account.email}}<br> 
                                       성별: {{user.kakao_account.gender}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-img>
            </v-card>
        </v-row>
    <div class="fff" style="background:rgb(200, 9, 200); height:570px">
       
          <v-avatar color="white" size="100">
            <v-avatar color="rgb(127, 212, 217)" size="250">
              <v-avatar color="white" size="245">
                <p class="black--text h1"></p>
              </v-avatar>
            </v-avatar>
          </v-avatar>

    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {},
            }
        }
        ,created() {
            this.user = this.$store.state.UserInfo
            console.log("qudtls",this.user);
        }
        // name: "userdetail", props: {userInfo:{type: Object}},
    }
</script>
<style>
 .fff{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>