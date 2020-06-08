<template>
  <div >
      <div class=" mt-3 text-center" >  
        <br>
         <span
              class=" test font-weight-bold "
              style="font-size:35px;">News Feed
          </span>
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

.test {
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
