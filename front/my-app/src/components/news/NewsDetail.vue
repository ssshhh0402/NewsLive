    <template>
    <div class="bk">
    <v-row class="default-margin">
        <v-col cols="9">
            <v-card
                class="mx-auto"
                height="70vh"
            >
                <v-card-text> 
                    <h1>{{title}}</h1>
                    <v-row>
                        <v-col cols="6">
                            <p>생성날짜 : {{created}}</p>
                        </v-col>
                        <v-col cols="6">
                            <p>기자 : {{author}}</p>
                        </v-col>
                    </v-row>
                    <v-divider class="divider"></v-divider>
                <v-container
                    id="scroll-target"
                    style="max-height: 50vh"
                    class="overflow-y-auto"
                >
                    <div
                    v-scroll:#scroll-target="onScroll"
                    
                     v-html="content"></div>
                    </v-container>
                </v-card-text>
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
        <v-col cols="3"
        id="scroll-target"
                    style="max-height: 70vh"
                    class="overflow-y-auto"
        >
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
            <div v-else
            v-scroll:#scroll-target="onScroll"
            >
            <NewsDetailCard v-for="item in simmilar" v-bind:id="item.postId" v-bind:key="item.postId" v-bind:title="item.title" v-bind:img="item.banner"></NewsDetailCard>
            </div>
        </v-col>
    </v-row>
    </div>
</template>

<script>
import axios from "axios";
import NewsDetailCard from "./TypeNewsCard/NewsDetail/NewsDetailCard.vue"
export default {
    components:{
        NewsDetailCard
    },
    props:['id'],
    data(){
        return{
            content : "",
            title:"",
            length: 0,
            author: "",
            created: "",
            simmilar:""
        }
    },
    methods:{
        getNews(){
            axios
                .get('http://k02b2041.p.ssafy.io:8080/api/v1/posts/'+this.id)
                .then(response=>{
                    // console.log(response.data);
                    this.content = response.data.content;
                    this.title = response.data.title;
                    this.author = response.data.author;
                    this.length = response.data.simmilar.length;
                    this.simmilar = response.data.simmilar;
                    this.created = response.data.created;
                })
                
        },
        onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
    mounted(){
        this.getNews();
    }
}
</script>
<style>
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
    margin-bottom: 3px;
    padding-bottom: 3px;
}
h1{
    margin:5px;
}
p{
    margin:5px;
}
span{
    margin:5px;
}
img{
    height: auto;
}
</style>