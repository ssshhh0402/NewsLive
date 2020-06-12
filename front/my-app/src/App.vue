<template>
  <v-app>
   <NewsNav ></NewsNav>
    <v-content>
    <router-view />
    </v-content>
    <NewsFooter v-if="$route.name !=='newscreate'"/>
  </v-app>
</template>

<script>
import NewsNav from "./components/common/NewsNav";
import NewsFooter from "./components/common/NewsFooter";

export default {
  name: 'App',
  components: {
    NewsNav,
    NewsFooter,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
  div {
  font-family: 'Do Hyeon', 'sans-serif';
}
</style>>
