<template>
    <v-row>
        <v-col cols="2" >
            <div class="fdfdfd">
            <div class="text-center">
             <v-avatar >
                    <v-img :src ="user.kakao_account.profile.profile_image_url"></v-img>
             </v-avatar>
            </div>
             <br>
            <div class="text-center">내 정보</div>
           
            <v-list dense="dense">
                <v-list-item class="mb-2">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>마이페이지</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="mb-2">
                    <v-list-item-icon>
                       <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>내 글 보기</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="mb-2">
                    <v-icon>mdi-email-open</v-icon> 
                    <span class ="ml-8"> {{user.kakao_account.email}}</span>
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
            <news-card :CardList="CardList"></news-card>
            </div>
        </v-col>
        <v-col cols="2">
            유저 정보
        </v-col>
    </v-row>
</template>

<script>
    import NewsCard from "./NewsCard.vue"
    export default {
        components: {
            NewsCard
        },
        data() {
            return {
                CardList: [],
                user: Object,
                fixxElem: 0
            };
        },
        watch:
        {
            // check () {
            //     window.addEventListener('scroll', function()
            //     {
            //        this.fixxElem = document.querySelector('.fixx');
            //         const posY = this.fixxElem.offsetTop;
            //         if( posY <window.innerHeight*0.2 )
            //         {
            //             this.fixxElem.classList.add('fixx12')
            //         }
            //         })
            // }
        },
        methods: {
        },
        created() 
        {
            this.user = this.$store.state.UserInfo
            console.log("user",this.user)
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