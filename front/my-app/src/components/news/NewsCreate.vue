<template>
    <div>
        <div class="white--text font-weight-bold fff"    
             style="background: #7FD4D9; height:132.2px; font-size:34px;">
            <span >News를 작성해주세요</span>
        </div>   
        <v-container>
     
        <vue-editor id="editor" v-model="description" useCustomImageHandler @imageAdded="handleImageAdded">
        </vue-editor>                            
         
        </v-container>
    </div>
</template>
<script>
    import axios from "axios";
    import { VueEditor } from "vue2-editor";
    // @ is an alias to /src
    export default {
        name:"newscreate",
        components : {
            VueEditor
        },
        data() {
            return {    
                description : "<h2>Editor 1 Starting Content</h2>",
           }
        },
        watch:
        {
            description : function () {
                this.description = this.description.replace("img src", "img style='height:250px;' src")
            }
        },
        methods: {
            handleImageAdded: function(file, Editor, cursorLocation) {
                var formData = new FormData();
                formData.append("image", file);
                console.log(file)
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
    .fff{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>