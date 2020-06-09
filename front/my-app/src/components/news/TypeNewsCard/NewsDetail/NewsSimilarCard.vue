
<template>
  <v-card
    class="mx-auto card-mb"
    max-width="400"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{title}}</v-list-item-title>
        <v-list-item-subtitle>{{author}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  <div class="div-bc">
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="img==='NO'?require('../../../../assets/newsBK2.png'):img"
    >
    </v-img>
  </div>

    <v-card-text>
      <!-- <div v-html="content"></div> -->
    </v-card-text>

  </v-card>
</template>
<script>
export default {
    props:['title','img','author','content'],

}
</script>
<style>
.card-mb{
    margin-bottom: 3px;
}
.div-bc{
    background-color: black;
}
</style>