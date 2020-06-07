
<template>
	<div>
        <br>
        <v-hover v-slot:default="{ hover }">
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
                    :elevation="hover ? 16 : 2"
                    v-if="(page-1)*5<=index && index<(page-1)*5 +5"
                    >
                    <div class="div-bc">
                        <v-row>
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
                        <v-col cols="8">
                        <span
                            class=" test font-weight-bold "
                            style="font-size:25px;">{{list.title}}
                        </span>
                        <div style="margin-top:1vw; width:88%;">
                        <h3>주제어 </h3>
                        <h4 style ="color:gray">{{list.topics.length>=50?list.topics.slice(0,50)+"...":list.topics}}</h4>
                        </div>
                        
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
        </v-hover>
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
  data () {
      return {
        page: 1,
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
