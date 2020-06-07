<template>
  <v-carousel
    cycle
    height="100%"
    style="right:13%"
    hide-delimiter-background
    show-arrows-on-hover
    interval="2000"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.image"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import axios from 'axios';
  export default {
    data () {
      return {
          slides: [],
      }
    },
    methods:{
        getAdList(){
            axios
            .get('http://k02b2041.p.ssafy.io:8080/api/v1/advertisement/')
            .then(response=>{
                this.slides = response.data;
            })
            .catch(e=>{
                console.error(e);
            })
        }
    },
    mounted(){
        this.getAdList();
    }
  }
</script>