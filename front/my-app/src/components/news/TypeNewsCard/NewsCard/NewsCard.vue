<template>
    <v-container>
                <v-hover v-slot:default="{ hover }">

                <v-card
                    height="300"
                    width="80%"
                    light="light"
                    align-center="align-center"
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    >
                     <v-img
                 class="white--text align-end"
                 height="100%"
                 v-bind:src="post.banner!=='NO'?post.banner:require('../../../../assets/backnews.jpg')"
                 @click="goDetail()"
                >
                
                    <v-list-item style="background-color:white;">
                        <v-list-item-avatar color="yellow"></v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline mt-3 mb-0 ">{{post.title}}</v-list-item-title>
                            <v-list-item-subtitle ma-0="ma-0">{{post.author}}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-spacer></v-spacer>
                    </v-list-item>
                    <v-card-text>
                        <v-row>
                            <v-img></v-img>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- | {{CardList.registeredAt.slice(0,10)}} | {{CardList.category}} 돕기 | -->
                        <v-btn icon="icon">
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon="icon">
                            <v-icon @click.stop="dialog = true">mdi-bell-sleep
                            </v-icon>
                        </v-btn>
                        <v-btn icon="icon">
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                    </v-img>
                </v-card>
        </v-hover>
        <v-dialog v-model="dialog"  max-width="440px">
            <v-card >
               
                <v-container>
                <v-row>
                <v-list-item class="text-center bold ">
                    <v-list-item-title >
                        기사 신고하기
                    </v-list-item-title>
                     <v-spacer></v-spacer>
                    <v-btn icon="icon" dark="dark" @click="Back()" >
                        <v-icon color="black darken-2">mdi-close</v-icon>
                    </v-btn>
                </v-list-item>
                </v-row>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row align="center">
                        <v-checkbox v-model="selected[0]" label="편파적인 기사" value="편파적인 기사"></v-checkbox>
                    </v-row>
                    <v-row align="center">
                        <v-checkbox v-model="selected[1]" label="부정확한 기사" value="부정확한 기사"></v-checkbox>
                    </v-row>
                    <v-row align="center">
                        <v-checkbox v-model="selected[2]" label="부적절한 표현(인격 모독)" value="부적절한 표현(인격 모독)"></v-checkbox>
                    </v-row>

                    <v-row align="center">
                        <v-checkbox
                            v-model="includeFiles"
                            hide-details="hide-details"
                            class="shrink mr-1 mt-1 "></v-checkbox>
                        <v-text-field class="mr-2" label="기타" ></v-text-field>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-center">
                    <v-btn rounded="rounded" color="black" dark="dark">신 고 하 기</v-btn>
                </v-card-actions>
                </v-container>
            </v-card>
            
        </v-dialog>
    </v-container>
</template>

<script>
    import axios from "axios"; 
    import { API_BASE_URL } from "../../../../config";
    export default {
        props:['post'],
        data() {
            return {
               dialog: false,
               selected:{
               },
               includeFiles:''
            }
        },
        
        methods: {
            Back()
            {
                this.dialog=false;
            },
            goFollow(){
                const author = post.author;
                const email = this.$store.state.UserInfo.kakao_account.email;
                axios
                .put(API_BASE_URL+'/api/v1/user/follow',{
                    fromUserEmail:email,
                    toUserEmail:author,
                })
            },
            goDetail(){
                 this.$router.push({name:'newsdetail',params: { id: this.post.postId }})
            }
        },
    };
</script>