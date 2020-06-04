    <template>
    <div class="bk">
    <v-row class="default-margin">
        <v-col cols="9">
            <v-card
                class="mx-auto"
            >
                <v-card-text>
                    <h1>{{title}}</h1>
                    <v-row>
                        <v-col cols="6">
                            <p>생성날짜 : </p>
                        </v-col>
                        <v-col cols="6">
                            <p>기자 : </p>
                        </v-col>
                    </v-row>
                    <v-divider class="divider"></v-divider>
                    <div v-html="content"></div>
                </v-card-text>
                <v-card-actions>
                </v-card-actions>
            </v-card>
            <!-- <v-card -->
                <!-- class="mx-auto" -->
            <!-- > -->
                <!-- <v-card-text> -->
                    <!-- <h1>댓글</h1> -->
                    <!-- <v-divider class="divider"></v-divider> -->
                    <!-- <div>댓글 리스트 들어간다.</div> -->
                    <!-- <div v-html="content"></div> -->
                <!-- </v-card-text> -->
                <!-- <v-card-actions> -->
                <!-- </v-card-actions> -->
            <!-- </v-card> -->
        </v-col>
        <v-col cols="3">
            <div v-if="length==0">
            <v-card
                
                class="mx-auto"
            >
                <v-card-text>
                <div>유사 기사가 없습니다.</div>
                </v-card-text>
                <v-card-actions>
                </v-card-actions>
            </v-card> 
            </div>
            <div v-else>
            <v-card
                class="mx-auto"
            >
                <v-card-text>
                <div>유사 기사가 없습니다.</div>
                </v-card-text>
                <v-card-actions>
                </v-card-actions>
            </v-card> 
            </div>
        </v-col>
    </v-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props:['id'],
    data(){
        return{
            content : "",
            title:"",
            length: 0,
        }
    },
    methods:{
        getNews(){
            axios
                .get('http://k02b2041.p.ssafy.io:8080/api/v1/posts/'+this.id)
                .then(response=>{
                    console.log(response.data);
                    this.content = response.data.content;
                    this.title = response.data.title;
                })
                .catch(e=>{
                    console.error(e);
                })
        }
    },
    mounted(){
        this.getNews();
    }
}
</script>
<style scoped>
.default-margin{
    margin-top:2px;
    margin-left: 10px;
    margin-right: 2px;
}
.bk{
    background-image: url("../../assets/newsBK1.jpg");
    height: 90vh;
    width: 100%;
}
.full-height{
    height: 80vh;
}
.divider{
    margin-top: 3px;
    margin-bottom: 3px;
}
</style>