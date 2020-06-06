
<template>
	<div style="height:400px">
        <br>
        <v-carousel height =650 width =1000 v-if="allNews.length"  hide-delimiters show-arrows-on-hover> 
        <v-carousel-item v-for="k in allNews.length/2" :key="k"> 
        <v-hover v-slot:default="{ hover }">
            <v-container>
                <v-row>
                <v-card
                    height="300"
                    width="400"
                    light="light"
                    align-center="align-center"
                    class="mx-auto"
                    :elevation="hover ? 16 : 2"
                    v-for="(list,index) in allNews"
                    :key="index">
                    <div class="div-bc">
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            v-bind:src="list.banner==='NO'?require('../assets/newsBK2.png'):list.banner"
                            >
                            <v-card-title>
                            <v-btn rounded color="black" dark large>{{list.title}}</v-btn>
                            </v-card-title>
                        </v-img>
                    </div>
                </v-card>
            </v-row>
            </v-container>
        </v-hover>
        </v-carousel-item>
        </v-carousel>
	</div>
</template>
<script>
export default {
   props:["allNews"],
   components : {
  },
  created(){
      console.log(this.allNews)
  }
};
</script>

<style></style>
