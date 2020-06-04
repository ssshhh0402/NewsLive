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
                                <v-img :src="UserInfo.kakao_account.profile.profile_image_url"></v-img>
                                {{}}
                            </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                            <v-list-item color="rgba(0, 0, 0, .4)" dark="dark">
                                <v-list-item-content>
                                    <v-list-item-title class="title">이름:
                                       {{UserInfo.kakao_account.profile.nickname}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>이메일:
                                       {{UserInfo.kakao_account.email}}<br> 
                                       성별: {{UserInfo.kakao_account.gender}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-img>
            </v-card>
        </v-row>
    <div class="fff" style="background:rgb(200, 200, 200); height:570px">
        <v-row> 
            <v-col cols="6">
             <span> 임시 저장 기사 </span>
             <v-data-table
                :headers="headers"
                :items="alldonations"
                :items-per-page="10"
                :search="search"
                >
                
         </v-data-table>   
                </v-col>
            <v-col cols="6">
             <span> 완료된 기사 </span>
            </v-col> 
        </v-row>
        
        <!-- <v-container>
           
            </v-data-table>
            </v-container> -->
         </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                search:'',
                UserInfo: {},
                headers: [
                    {
                        text: '유저ID',
                        align: 'center',
                        sortable: false,
                        value: 'user'
                    }, {
                        text: '기사 제목 ',
                        value: 'pointUser',
                        align: 'center',
                    },
                    {
                        text: '작성 날짜',
                        value: 'createdAt',
                        sortable: false
                    },
                    {
                        text: '수정 여부',
                        value: 'pointUser',
                        align: 'center',
                    }
                ],
                alldonations:[{}]
            }
        },
        created() {
            this.UserInfo = this.$store.state.UserInfo
            console.log(this.UserInfo)
        },
        mounted()
        {
            this.getMyNews();
        },
        methods: {
            getMyNews() {
                console.log("Mypage",this.alldonations);
              axios
                  .get('http://k02b2041.p.ssafy.io:8080/api/v1/posts')
                  .then(res => {
                      this.alldonations = res.data
                      console.log("res",res)
                  })
                  .catch((err) => {
                      alert(err)
                  })
           },
        },
        
    }
</script>
<style>
 .fff{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>