<template>
    <div>
        <div class= "back_g" style="height:360px">
            <br>
            <br><br>
        <v-card class=" mx-auto"   width="60%">
        <div >
            <v-row>
                <v-col cols="2">
            <v-avatar  style="margin-top:10px; margin-left:20px;" size ="150px">
                <v-img  :src="UserInfo.kakao_account.profile.profile_image_url"><v-avatar></v-avatar></v-img>
            </v-avatar>
                </v-col>
                <v-col cols="1"></v-col>
                <v-col cols="4">
            <p style="font-size:50px; margin-top:20px;">{{UserInfo.kakao_account.profile.nickname}} 

                                    <v-btn
                                    style="margin-left:20px;"
                                        color="black"
                                        dark
                                        @click.stop="dialog = true; getAccount();"
                                        >
                                        수익 확인
                                    </v-btn>


            </p>
            <p style="font-size:20px;">{{UserInfo.kakao_account.role}}</p>
            <p style="font-size:20px;">{{UserInfo.kakao_account.email}}</p>
            <!-- <p>{{UserInfo.kakao_account.role}}</p> -->
                </v-col>
                <v-col cols="4">
                    <v-row class="text-center" style="margin-top:10px">
                        <v-col cols="6">
                            <span
                                class=" font-weight-bold "
                                style="font-size:35px; color:#00004;">-ING
                            </span>
                        </v-col>
                        <v-col cols="6">
                            <span
                                class=" font-weight-bold "
                                style="font-size:35px; color:#00004;">COMPLETE
                            </span>
                        </v-col >
                    </v-row>
                    <v-row class="text-center">
                        <v-col cols="6">
                            <span
                                class=" font-weight-bold "
                                style="font-size:35px; color:#00004;">{{savePostSize}}
                            </span>
                        </v-col>
                        <v-col cols="6">
                            <span
                                class=" font-weight-bold "
                                style="font-size:35px; color:#00004;">{{otherPostSize}}
                            </span>
                        </v-col >
                    </v-row>
                </v-col>
            </v-row>
        </div>
        </v-card>
                                            <div class="my-2" >
                                            <v-row justify="center" style="margin-top:30px">
                                        
                                        <v-dialog
                                        v-model="dialog"
                                        max-width="290"
                                        >
                                        <v-card>
                                            <v-card-title class="headline">당신의 광고 수익은?!</v-card-title>

                                            <v-card-text>
                                            광고 수익은 <strong>{{amount}}</strong> 입니다.
                                            </v-card-text>

                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="dialog = false"
                                            >
                                                확인
                                            </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-row>
      </div>
        </div>
        <div style="height:570px ">
        <v-row> 
            <v-col cols="1"></v-col>
            <v-col class="mr-2" cols="5">
                <div class=" text-center" >  
                        <span
                            class=" font-weight-bold "
                            style="font-size:35px; color:#00004;">-ING
                        </span>
                    </div>
             <v-data-table
                :headers="headers"
                :items="savePost"
                :items-per-page="5"
                :search="search"
                >
             </v-data-table>   
            </v-col>
            <v-col  cols="5">
                <div class=" text-center" >  
                    <span
                        class=" font-weight-bold "
                        style="font-size:35px; color:#00004;">COMPLETE
                    </span>
                </div>
             <v-data-table
                :headers="headers"
                :items="otherPost"
                :items-per-page="5"
                :search="search"
             >
             </v-data-table>
            </v-col> 
        </v-row>
        
         </div>
    </div>
</template>
<script>
    import axios from 'axios';
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
                        value: 'author'
                    }, {
                        text: '기사 제목 ',
                        value: 'title',
                        align: 'center',
                    },
                    {
                        text: '작성 날짜',
                        value: 'createDate',
                        sortable: false
                    }
                ],
                otherPost:[{}],
                savePost:[{}],
                otherPostSize:0,
                savePostSize:0,
                amount: 0,
                dialog:false,
            }
        },
        created() {
            this.UserInfo = this.$store.state.UserInfo
            // console.log(this.UserInfo)
        },
        mounted()
        {
            this.getPosts();
        },
        methods: {
            getPosts(){
                const email = this.$store.state.UserInfo.kakao_account.email;
                axios
                .get('http://k02b2041.p.ssafy.io:8080/api/v1/posts/user/'+email)
                .then(response=>{
                    // console.log(response);
                    this.otherPost = response.data.otherPost;
                    this.otherPostSize = response.data.otherPost.length;
                    this.savePost = response.data.savedPost;
                    this.savePostSize = response.data.savedPost.length;
                })
                .catch(e=>{
                    // console.error(e);
                })
            },
            
            getAccount(){
                const email = this.$store.state.UserInfo.kakao_account.email;
                axios
                .get(`http://k02b2041.p.ssafy.io:8080/api/v1/fabric/account/${email}`)
                .then(response=>{
                    this.amount = response.data.amount;
                })
                .catch(e=>{
                    // console.error(e);
                })

            }
        },
        
    }
</script>
<style>
 .fff{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   .bk{background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 90vh;
    width: 100%;
    padding:5vw;
} 
.test {background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.back_g{
background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .img-center {
        margin-top: 3px;
        left: 3.4%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>