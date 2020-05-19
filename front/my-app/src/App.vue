<template>
  <v-app>
   <NewsNav ></NewsNav>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import NewsNav from "./components/common/NewsNav";
export default {
  name: 'App',
  components: {
    NewsNav,
  },
  data: () => ({
    //
  }),
};
</script>
