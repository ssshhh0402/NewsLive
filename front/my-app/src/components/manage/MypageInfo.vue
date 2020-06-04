<template>
    <div >
        <div class= "bk" style="height:380px">
        <h2 class= "mt-3 text-center">내 정보
        </h2>
        <v-card align-center="align-center"   >
        <div class="text-center">
            <v-img  align-center height="100px" width="100px" :src="UserInfo.kakao_account.profile.profile_image_url"></v-img>
            <br>이름: {{UserInfo.kakao_account.profile.nickname}}
            <br>이메일: {{UserInfo.kakao_account.email}} 
            <br>성별: {{UserInfo.kakao_account.gender}}
        </div>
        </v-card>
        </div>
        <div class="fff" style="height:570px ">
        <v-row> 
            <v-col cols="1"></v-col>
            <v-col class="mr-2" cols="5">
             <span> 작업중인 기사 </span>
             <v-data-table
                :headers="headers"
                :items="alldonations"
                :items-per-page="10"
                :search="search"
                >
             </v-data-table>   
            </v-col>
            <v-col  cols="5">
             <span> 완료된 기사 </span>
             <v-data-table
                :headers="headers"
                :items="alldonations"
                :items-per-page="10"
                :search="search"
                :backgroud-color="gray"
             >
             </v-data-table>
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
   .bk{
    background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 90vh;
    width: 100%;
    padding:5vw;
} 
</style>