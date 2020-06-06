<template>
<div class="bk text-center">
      <v-card
    class="mx-auto"
    max-width="100vw"
  >
    <v-card-text>
      <p class="display-1 text--primary text-center">
        광고 등록 페이지
      </p>
      <div class="text--primary">
          <v-form>
    <v-container>
      <v-row>

        <v-col cols="6" sm="6" md="6">
          <v-text-field
            label="price"
            v-model="price"
            filled
            rounded
            prefix="₩"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            label="months"
            filled
            v-model="months"
            prefix="M"
            rounded
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            label="content"
            v-model="content"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
            <v-file-input
                v-model="image"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
            ></v-file-input>
        </v-col>


      </v-row>
    </v-container>
  </v-form>
      </div>
    </v-card-text>
    <v-card-actions>
    <v-btn class="btn-center" rounded color="primary" dark @click="registerButtonClick()">등록</v-btn>
    </v-card-actions>
  </v-card>
              <v-row>
              <!-- font-family = 'Open Sans' -->
              <v-col cols="12" md="2"></v-col>
              <v-col cols="12" md="4">
                <div align="left" class="mt-7">
                <span  class="blue--text font-weight-bold " style="font-size:40px;">The News Live</span>
                <br><br>  
                  <div align="left" class="gray font-weight-bold mt-6" style="font-size:19px;">
                  <div class="h1"><strong>최근 기사 <span class="h5"><strong>~~~~~ </strong></span></strong></div>
                  </div> 
                  <br> 
                  <v-divider></v-divider>
                  <v-btn 
                    class=" mt-5 bk"
                    width="80%"
                    v-for="item in posts"
                    v-bind:key="item.id"
                    dark
                    large
                    @click="goIntro"
                  > 
                  <div class="mb-2 mr-2 font-weight-bold ">{{item.title}}</div> 
                </v-btn>
                </div>
              </v-col> 
              <v-col  cols="12" md="5" >
                <v-carousel  hide-delimiters show-arrows-on-hover interval="4000"> 
                <v-carousel-item v-for="k in 4" :key="k"> 
                    <v-row >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    light="light"
                    align-center="align-center"
                    :elevation="hover ? 16 : 2"
                    class="mx-auto">
                    <v-img
                      class="white--text align-end"
                      height="500px"
                      src= "../../assets/backnews.jpg"
                    >
                    <v-card-text>
                      
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text="text" color="deep-purple accent-4">
                        Read
                      </v-btn>
                      <v-btn text="text" color="deep-purple accent-4">
                        Bookmark
                      </v-btn>
                    </v-card-actions>
                    </v-img>
                  </v-card>
              </v-hover>
                    </v-row>
                </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            image:null,
            price: 0,
            months: 0,
            content: "",
            dialog: false,
            posts: [],
        }
    },
    methods:{
        registerButtonClick(){
            const email = this.$store.state.UserInfo.kakao_account.email;
            console.log(email);
                    var formData = new FormData();
                    formData.append("price", this.price);
                    formData.append("months", this.months);
                    formData.append("content", this.content);
                    formData.append("image", this.image);
                    formData.append("userEmail", email);
                    axios
                        .post('http://k02b2041.p.ssafy.io:8080/api/v1/advertisement',formData,
                            // {
                                // headers:{
                                    // 'content-type': "multipart/form-data"
                                // }
                            // }
                            )              
                        .then(response => {
                            console.log(response)
                        })
                        .catch((e) => {
                            console.error(e);
                        })
        },
        getRecent(){
          axios
          .get('http://k02b2041.p.ssafy.io:8080/api/v1/posts/desc')
          .then(response=>{
            console.log(response.data);
            this.posts = response.data;
          })
          .catch(e=>{
            console.error(e);
          })
        },
    },
    mounted(){
      this.getRecent();
    }
}
</script>

<style scoped>
.bk{
    background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 90vh;
    width: 100%;
    padding:5vw;
}
.text-center{
    text-align: center;
}
.btn-center {
  margin-top: 3px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>