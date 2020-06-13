<template>
  <div >
      <div class=" mt-3 text-center" >  
        <br>
         <span
              class="  font-weight-bold "
              style="font-size:35px; color : #000046; text-shadow: 2px 2px 2px gray;">News Feed
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

.test {background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
