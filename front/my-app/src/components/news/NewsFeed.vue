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
            <div class="text-center">내 정보</div>
           
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
        </v-col>
        
        <v-col cols="8">
            <div class="fdfdfd"
                id="scroll-target"
                style="max-height: 700px"
                >
                <!-- 여기 수정이 필요한대 어떻게 수정을 해야하지?  -->
                <!-- 주제에 따라서 카드 내용이 다르잖아?  -->
            <Article :CardList="CardList"></Article>
            </div>
        </v-col>
        <v-col cols="2">
            유저 정보
        </v-col>
    </v-row>
</template>

<script>
    import Article from "./Article.vue"
    export default {
        components: {
            Article
        },
        data() {
            return {
                CardList: [],
                user: Object,
                fixxElem: 0
            };
        },
        methods: {
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