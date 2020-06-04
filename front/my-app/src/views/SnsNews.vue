<template>
  <div >
      <div class="mt-5 font-weight-bold text-center" style="font-size:29px;">  뉴스 피드
      </div>
      <v-row>
        <v-col>
          <NewsFeed></NewsFeed>
        </v-col>
      </v-row>
      </div>
</template>

<script>
import NewsFeed from "../components/news/NewsFeed.vue"
export default {
   components : {
       NewsFeed
  }
};
</script>

<style>

</style>
