<template>
  <v-app>
   <NewsNav ></NewsNav>
    <v-content>
    <router-view />
    </v-content>
    <NewsFooter v-if="this.$route.name !=='news'"/>
  </v-app>
</template>

<script>
import NewsNav from "./components/common/NewsNav";
import NewsFooter from "./components/common/NewsFooter";

export default {
  name: 'App',
  components: {
    NewsNav,
    NewsFooter
  },
  data: () => ({
    //
  }),
};
</script>
