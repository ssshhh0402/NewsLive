<template>
<!-- 해결해야할 것 ( 임시저장, 컴플릿 ) -->
    <v-container>
        <div cols="3"
        id="scroll-target"
                    style="max-height: 80vh"
                    class="fdfdfd overflow-y-auto"
        >
        <vue-editor
            
            id="editor"
            useCustomImageHandler
            @image-added="handleImageAdded"
            v-model="content"
            v-scroll:#scroll-target="onScroll"
            ></vue-editor>
        <br>
        </div>
        <!--완성된 기사 미리 보기로 설정하기. // 뉴스 타이틀을 가지고 왔어... 그리고? 어떻게 보내줘야하지? -->
        <v-footer absolute="absolute" class="font-weight-medium">
            <v-row>
                 <v-col class="text-left" cols="2"></v-col>
                <v-col class="text-left" cols="4">
                    <v-btn text="text" @click.stop="dialog.preview = true">
                        <v-icon>mdi-history</v-icon>
                        <strong>미리보기</strong>
                    </v-btn>
                    &nbsp;
                    <v-btn @click="goTempStore()" text="text">
                        <v-icon>mdi-message-text</v-icon>
                        <strong>임시 저장</strong>
                    </v-btn>
                </v-col>
                <v-col class="text-right" cols="4">
                    <v-btn
                        class="mr-4"
                        rounded="rounded"
                        color="black"
                        dark="dark"
                        @click.stop="dialog.complete = true"
                        >Complete</v-btn>
                </v-col>
                 <v-col class="text-left" cols="2"></v-col>
            </v-row>
        </v-footer>
        <v-dialog v-model="dialog.preview" max-width="1000">
            <v-card>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn icon="icon" dark="dark" @click="previewBack()" class="mr-6">
                        <v-icon color="black darken-2">mdi-close</v-icon>
                    </v-btn>
                </v-row>
                <div class="output ql-snow">
                    <div class="ql-editor" v-html="content"></div>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog.complete" max-width="700">
                   <v-card >
                       <v-container>
                       <v-row >
                           <v-card-title>카테고리를 선택해주세요.</v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn icon="icon" dark="dark" @click="completeBack()" class="mr-2">
                                <v-icon color="black darken-2">mdi-close</v-icon>
                            </v-btn>
                        </v-row>
                            <v-divider></v-divider>
                      <v-row >
                      <v-col cols="4">
                      <div class="text-center" @click="checkBox(0)" >
                      <v-avatar size="100px"><div class="font_color font-weight-bold" v-if="checkNum===0">OK</div><v-img v-else src="../../assets/econo.jpg"></v-img></v-avatar>
                            <div class="mt-2 white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;"> 경제
                            </div>
                            경제
                      </div>
                      </v-col>
                      <v-col cols="4">
                          <div class="text-center" @click="checkBox(1)">
                          <v-avatar size="100px" ><div class="font_color font-weight-bold" v-if="checkNum===1">OK</div><v-img v-else src="../../assets/sport.png"></v-img></v-avatar>
                            <div
                              class="mt-2  white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;">  스포츠
                            </div>
                            스프츠
                          </div>
                      </v-col>
                      <v-col cols="4">
                          <div class="text-center" @click="checkBox(2)">
                          <v-avatar size="100px" ><div class="font_color font-weight-bold" v-if="checkNum===2">OK</div><v-img v-else src="../../assets/social1.jpg"></v-img></v-avatar>
                            <div 
                              class=" mt-2 white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;">  사회
                            </div>
                            사회
                          </div>
                      </v-col>
                      <v-col cols="4">
                          <div class="text-center" @click="checkBox(3)">
                          <v-avatar size="100px" ><div class="font_color font-weight-bold" v-if="checkNum===3">OK</div><v-img v-else src="../../assets/stock.jpg"></v-img></v-avatar>
                            <div 
                              class=" mt-2 white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;"> 증시
                            </div>
                            증시
                          </div>
                      </v-col>
                      <v-col cols="4">
                          <div class="text-center" @click="checkBox(4)">
                          <v-avatar size="100px" ><div class="font_color font-weight-bold" v-if="checkNum===4">OK</div><v-img v-else src="../../assets/it.jpg"></v-img></v-avatar>
                            <div 
                              class=" mt-2 white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;"> I T
                            </div>
                            IT
                          </div>
                      </v-col>
                      <v-col cols="4">
                          <div class="text-center" @click="checkBox(5)">
                          <v-avatar size="100px" ><div class="font_color font-weight-bold" v-if="checkNum===5">OK</div><v-img v-else src="../../assets/entertain.jpg"></v-img></v-avatar>
                            <div 
                              class=" mt-2 white--text  text--lighten-1 font-weight-bold "
                              style="font-size:20px;"> 연예
                            </div>
                            연애
                          </div>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col>
                            <v-btn>유사 기사를 찾으시겠습니까?</v-btn>
                        </v-col>
                    </v-row>
                    </v-container>
             </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
    import dedent from 'dedent'
    import {VueEditor} from "vue2-editor";
    import axios from "axios"; 
    import { API_BASE_URL } from "../../config";
    export default {
        name: "newscreate",
        components: {
            VueEditor
        },
        data() {
            return {
                dialog: {
                    preview: false,
                    complete: false
                },
                checkNum: -1,
                selected: {},
                picture: "NO",
                Title: " ",
                Email: " ",
                // <strong class="ql-font-serif ql-size-large" style="color: rgb(230, 0,
                // 0);">always</strong> <p><span class="ql-font-serif" style="color: gray" >*아래에
                // 기사 내용을 작성해주세요.</span></p><p><br></p>
                content: dedent `
                <h1 class="ql-align-center"><span class="ql-font-serif" style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> News Title </span></h1>
                <p><br></p><p><strong class="ql-font-serif ql-size-large" style="background-color: gray; color: rgb(255, 255, 255)">News SubTitle 입력</strong></p><p><br></p>
                <p><strong class=" ql-size-middle">CONTENTS 작성란입니다. </strong><u style="color:gray"> (*영상 및 사진 첨부 가능)</u> </p>
                <p class="ql-font-serif" style="color: rgb(230, 0, 0);"></p>
                <p><br></p><p><br></p><p><br></p><p><br></p>
                <p><br></p>
                <p><span class="ql-font-serif" style="color: gray" >*소 속 : </span></p>
                <p><span class="ql-font-serif" style="color: gray">*이메일 : </span></p>
                <p><span class="ql-font-serif" style="color: gray">*기자 이름 : </span></p>
                <strong class="ql-font-serif ql-size-middle" >[ⓒ 더뉴스라이브 & mk.co.kr, 무단전재 및 재배포 할 수 없으며 블록체인 시스템에 의해 모두 기록됩니다.]</strong>
                `
            }
        },
        watch: {
            content: function () {
                this.content = this
                    .content
                    .replace("img src", "img style='height:250px;' src")
            }
        },
        methods: {
            checkBox(num){
            this.checkNum = num;
            },
            goTempStore() {
                this.Email = this.$store.state.UserInfo.kakao_account.email
                const start = this.content.indexOf('255);">',2) + '255);">'.length;
                const end = this.content.indexOf("</");
                this.Title =this.content.substr(start,end-start).trim(); 
                console.log("이메일", this.Email );
                console.log("제목", this.Title );
                axios
                    .post(API_BASE_URL + "/api/v1/posts", {
                            author: this.Email,
                            content : this.content,
                            title : this.Title,
                            kinds: 0,
                            banner: this.picture
                    })
                    .then(response => {
                       console.log(response)
                    })
                    .catch(() => {
                    })
            },
        previewBack() {
            this.dialog.preview = false;
        },
        completeBack()
        {
            this.dialog.complete = false;    
        },
        goComplete()
        {
            // /
            
        },
        handleImageAdded: function (file, Editor, cursorLocation) {
            var formData = new FormData();
            formData.append("image", file);
            axios({
                url: 'https://api.imgur.com/3/image',
                method: 'POST',
                headers: {
                    'Authorization': 'Client-ID 82c1f7f0d7c077a'
                },
                data: formData
            })
                .then((result) => {
                    console.log(result);
                    let url = result
                        .data
                        .data
                        .link
                        Editor
                        .insertEmbed(cursorLocation, 'image', url);
                    if(this.picture== "NO")
                    {
                        this.picture = url;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            }
    }
}
</script>
<style>
    #editor {
        height: 680px;
    }
    .ql-snow .ql-editor img {
        height: 250px;
    }
    .fff {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fdfdfd{
        overflow-y: scroll;
    }
    .fdfdfd::-webkit-scrollbar {
        display: none;
    }
    .font_color{
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 35px;
    }
</style>