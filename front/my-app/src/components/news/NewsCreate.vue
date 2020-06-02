<template>
    <div>
        <vue-editor id="editor"
            useCustomImageHandler
            @image-added="handleImageAdded" v-model="content">
        </vue-editor>
        <!--완성된 기사 미리 보기로 설정하기.  
             -->
        <v-footer
        absolute="absolute"
        class="font-weight-medium">
        <v-row>
        <v-col class="text-left" cols="6">
            <v-btn text @click.stop="dialog.preview = true">
                <v-icon>mdi-history</v-icon>
                <strong>미리보기</strong>
            </v-btn>
            &nbsp;
            <v-btn text >
                <v-icon>mdi-message-text</v-icon>
                <strong>맞춤법 검사</strong>
            </v-btn>
        </v-col>
        <v-col class="text-right" cols="6">
         <v-btn class="mr-4" rounded color="black" dark>Complete</v-btn>
        </v-col>
        </v-row>
    </v-footer>
        <v-dialog v-model="dialog.preview" max-width="1000">
            <v-card>
                <v-row>
                <v-spacer></v-spacer>
                    <v-btn icon="icon" dark="dark" @click="previewBack()" class ="mr-6">
                        <v-icon color="black darken-2">mdi-close</v-icon>
                    </v-btn>
                </v-row>
                <div class="output ql-snow">
                    <div class="ql-editor" v-html="content"></div>
                </div>
            </v-card>
        </v-dialog>
    </div>

</template>
<script>
    import axios from "axios";
    import dedent from 'dedent'
    import { VueEditor  } from "vue2-editor";
    export default {
        name:"newscreate",
        components : {
            VueEditor,
        },
        data() {
            return {  
                dialog: {
                    preview: false,
                    Grammer: false
                },  
                //<strong class="ql-font-serif ql-size-large" style="color: rgb(230, 0, 0);">always</strong>
                //<p><span class="ql-font-serif" style="color: gray" >*아래에 기사 내용을 작성해주세요.</span></p><p><br></p>
                content: dedent`
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
                `,
            }
        },
        watch:
        {
            content : function () {
                this.content = this.content.replace("img src", "img style='height:250px;' src")
            }
        }
        ,
        methods: {
            previewBack(){
                this.dialog.preview = false;    
            },
            handleImageAdded: function(file, Editor, cursorLocation) {
                    var formData = new FormData();
                    formData.append("image", file);
                    axios({
                        url: 'https://api.imgur.com/3/image',
                        method: 'POST',
                        headers:{
                        'Authorization': 'Client-ID 82c1f7f0d7c077a'
                        },
                        data: formData
                    })
                    .then((result) => {
                        console.log(result);
                        let url = result.data.data.link
                        Editor.insertEmbed(cursorLocation, 'image', url);
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
    .fff{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
     
</style>