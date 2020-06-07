<template>
    <v-row > 
        <v-col cols="2" >
            <div v-if="this.$store.state.isSigned== true" class="fdfdfd">
            <div class="text-center">
             <v-avatar v-if="this.$store.state.UserInfo.kakao_account.profile.profile_image_url">
                    <v-img :src ="this.$store.state.UserInfo.kakao_account.profile.profile_image_url"></v-img>
             </v-avatar>
            </div>
             <br>
            <div class="font-weight-bold text-center">내 정보</div>
           
            <v-list dense="dense">
                
                <v-list-item class="mb-2">
                    <v-list-item-icon>
                       <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{this.$store.state.UserInfo.kakao_account.profile.nickname}}님,   안녕하세요!</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="mb-2">
                    <v-list-item-icon>
                        <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>마이페이지</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="mb-2">
                    <v-icon>mdi-email-open</v-icon> 
                    <span class ="ml-8"> {{this.$store.state.UserInfo.kakao_account.email}}</span>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
            </div>
            <div v-else>
                <div class="text-center">안녕하세요 !</div>
                <v-list dense="dense">
                    <v-list-item class="mb-2">
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>페이지</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item class="mb-2">
                        <v-list-item-icon>
                        <v-icon>mdi-history</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>글 보기</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </div>
            <br> 
            <br>
             <div class="font-weight-bold text-center">기사 </div>
             <v-list dense="dense">
                    <v-list-item class="mb-2">
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title ><v-btn text  @click="goType(1)">모든 기사보기</v-btn></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item class="mb-2">
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title ><v-btn text @click="goType(2)"> 팔로우 기사보기</v-btn></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
        </v-col>
        <!-- 여기가 가운데 라인. -->
        <v-col cols="8">
            <div class="fdfdfd" id="scroll-target" style="max-height: 70vh">
            
            <!--모든 뉴스 -->
            <v-row v-if="Change==true" >
                <v-col>
                <div v-for="(item, index) in AllCardList" v-bind:key="index" >
                    <AllNews v-bind:post="item"></AllNews>    
                </div>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col v-if ="Ban>=1">
                    <div v-for="(item, index) in FollowCardList" v-bind:key="index">
                    <SubjectNews v-if="item.posts.length>1" v-bind:posts="item.posts" v-bind:topic="item.topics"></SubjectNews>            
                    <!-- 없으면 그냥 하나 짜리 -->
                    <AllNews v-else v-bind:post="item.posts[0]"></AllNews>
                    </div>
                </v-col>
                <v-col v-else class="text-center">
                    <br>
                    <br>
                    <br>
                    팔로우 기사가 없습니다. 
                </v-col>
            </v-row>
            </div>
        </v-col>
        <v-col cols="2"

        >
        <span
              class=" test font-weight-bold "
              style="font-size:20px;">Followings
          </span>
            <div
                        id="scroll-target"
                    style="height: 28vh"
                    class="overflow-y-auto"
            >
                <v-list-item-group color="primary"
                v-scroll:#scroll-target
                >
                    <v-list-item
                    v-for="(item, i) in follows"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </div>
            <div class="text-center" style="height:35vh">
                <AdBanner></AdBanner>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    import { API_BASE_URL } from "../../config";
    import AllNews from "./TypeNewsCard/AllNews.vue"
    import SubjectNews from "./TypeNewsCard/SubjectNews.vue"
    import axios from "axios";
    export default {
        components: {
            SubjectNews,
            AllNews,
            AdBanner
        },
        data() {
            return {
                AllCardList: null, 
                FollowCardList: null,
                user: Object,
                Change: false, 
                Ban : 0, 
                fixxElem: 0,
                follows: [],
            };
        },
        methods: {
             goType(num)
             {
                if( num ==1)
                {
                    this.Change = true;    //모든 기사
                }
                else if(num ==2)
                {
                    this.Change = false;   // 팔로우 기사.
                }
             },
             allarticle()
             {
                 // 신호를 줘야한다.
                 axios
                .get(API_BASE_URL+"/api/v1/posts")
                .then(response=>{
                    this.AllCardList = response.data;
                    // console.log("AllNews",this.AllCardList);
                })
             },
             followarticle()
             {
                 const email = this.$store.state.UserInfo.kakao_account.email;
                axios
                .get(API_BASE_URL+"/api/v1/posts/following/"+email)
                .then(response=>{
                    // console.log(response.data);
                    this.FollowCardList = response.data;
                    // console.log("FollowNews",this.FollowCardList);
                    // console.log(this.FollowCardList.length )
                    if(this.FollowCardList.length == 0)
                    {
                        this.Ban =this.FollowCardList.length;
                        this.Change =true; //모든뉴스 보여주기. 
                    }
                })
                .catch(e=>{
                    console.error(e);
                })
                 //변수 CardList에 담고 v-for 돌면서 두가지를 그리면 되겠다.
             },
             getFollwers(){
                 //follwer가져오기
                const email = this.$store.state.UserInfo.kakao_account.email;
                axios
                .get(API_BASE_URL+"/api/v1/user/follow/"+email)
                .then(response=>{
                    // console.log(response.data);
                    this.follows = response.data.following;
                })
             }
        },
        created() 
        {
        },
        mounted(){
            this.followarticle();
            this.allarticle();
            this.getFollwers();
        }
    };
</script>
<style>
    .fdfdfd{
        overflow-y: scroll;
    }
    .fdfdfd::-webkit-scrollbar {
        display: none;
    }
    .test {
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>