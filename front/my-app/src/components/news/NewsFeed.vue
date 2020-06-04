<template>
<!-- 팔로우 아이콘 추가하기 -->
<!-- 링크로 이동하기  -->
<!--  -->
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
                        <v-list-item-title @click="allarticle()" >모든 기사보기</v-list-item-title>
                    </v-list-item>
                   
                    <v-divider></v-divider>
                </v-list>
        </v-col>
        <!-- 여기가 가운데 라인. -->
        <v-col cols="8">
            <div class="fdfdfd" id="scroll-target" style="max-height: 700px">
                <!--모든기사-->
                <!--주제별 기사 -->
                <!--유저 기사 -->
            <Article v-if="count !=1" :CardList="CardList" :count="count"></Article>
            <AllNews v-else></AllNews>
            </div>
        </v-col>
        <v-col cols="2">
            유저 정보
        </v-col>
    </v-row>
</template>

<script>
    import Article from "./Article.vue"
    import AllNews from "./TypeNewsCard/AllNews.vue"
    export default {
        components: {
            Article,
            AllNews
        },
        data() {
            return {
                CardList: [],
                user: Object,
                fixxElem: 0,
                count: 1,
            };
        },
        methods: {
            //여기에서 뉴스 기사를 가져와야겠구나 . 
             allarticle()
             {
                 this.count=1;
             },
             Ascatelog()
             {
                 this.count=2;
             },
             Asuser()
             {
                 this.count=3;
             }
        },
        created() 
        {
        },
    };
</script>
<style>
    .fdfdfd{
        overflow-y: scroll;
    }
    .fdfdfd::-webkit-scrollbar {
        display: none;
    }
</style>