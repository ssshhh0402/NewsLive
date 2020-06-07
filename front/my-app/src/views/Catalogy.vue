
<template>
	<div>
        <br>
        <!-- <v-hover v-slot:default="{ hover }"> -->
            <v-container>
                <v-row>
                    <v-col cols="12"
                     v-for="(list,index) in allNews"
                    :key="index"
                    >
                <v-card
                    style="margin-bottom:10px"
                    height="20vh"
                    width="100%"
                    light="light"
                    align-center="align-center"
                    class="mx-auto"
                    hover
                    v-if="(page-1)*5<=index && index<(page-1)*5 +5"
                    >
                    <div class="div-bc">
                        <v-row>
                            <v-col cols="8"
                            style="text-align:start;padding-left:35px">
                            <span
                                class="test font-weight-bold "
                                style="font-size:25px;">{{list.title}}
                            </span>
                           
                            <div 
                            style="margin-top:1vw; width:95%;">
                                <!-- <h4 style ="color:gray;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{list.topics}}</h4> -->
                                <v-chip
                                class="ma-2"
                                text-color="black"
                                color="indigo"
                                outlined
                                v-for="(topic,index2) in splitWord(list.topics)"
                                :key= "index2">
                                    {{topic}}
                                </v-chip>
                            </div>
                           
                            </v-col>
                            <v-col cols="4">
                                <v-img
                                    class="white--text align-end"
                                    height="15vh"
                                    width="100%"
                                    v-bind:src="list.banner==='NO'?require('../assets/newsBK2.png'):list.banner"
                                >
                                    <v-card-title>
                            
                                    </v-card-title>
                                </v-img>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
                </v-col>
            </v-row>
            
                 <div class="text-center">
                    <v-pagination
                    v-model="page"
                    :length="Math.floor(allNews.length/5)+1"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    ></v-pagination>
                </div>       
            </v-container>
        <!-- </v-hover> -->
	</div>
</template>
<script>
export default {
   props:["allNews"],
   components : {
  },
  created(){
      console.log(this.allNews)
      console.log(this.allNews.length/5)
  },
  methods:{
      splitWord(target){
          var selectedWords = [];
          var words = target.split(",");
          for (var a in words){
              if (words[a].length > 0){
                  selectedWords.push(words[a]);
              }
          }
          return selectedWords;
      }
  },
  data () {
      return {
        page: 1,
        topicList : []
      }
    },
};
</script>

<style>
.test {
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
