<template>
  <div >
      <div class=" mt-3 text-center" >  
        <br>
         <span
              class="  font-weight-bold "
              style="font-size:35px; color : #000046;">News Feed
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
  color : #000046;
  /* background: linear-gradient(to right, #000046, #1CB5E0); */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
}
</style>
