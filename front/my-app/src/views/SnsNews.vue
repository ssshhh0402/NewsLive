<template>
  <div >
      <div class="mt-2 font-weight-bold text-center" style="font-size:29px;">  뉴스 피드
      </div>
          <NewsFeed></NewsFeed>
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
