<template>
  <div>
    <div style="height:730px">
      <br>
      <span  class="font-weight-bold text-center" style="display: inline-block; font-size:54px;">  뉴스 피드
      </span>
      <br>
      <v-row>
        <v-col>
          <NewsCard></NewsCard>
        </v-col>
      </v-row>
      </div>
  </div>
</template>

<script>
import NewsCard from "../components/news/NewsCard.vue"
export default {
   components : {
       NewsCard
  }
};
</script>

<style></style>
