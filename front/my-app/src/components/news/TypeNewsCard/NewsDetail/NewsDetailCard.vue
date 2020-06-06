<template>
<v-container>
  <v-card
    class="mx-auto card-mb"
    max-width="400"
  >
  <div class="div-bc">
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="img==='NO'?require('../../../../assets/newsBK2.png'):img"
    >
      <v-card-title>
          <v-btn rounded color="black" dark large>{{title}}</v-btn>
          </v-card-title>
    </v-img>
  </div>
  </v-card>
</v-container>
</template>
<script>
export default {
    props:['title','img'],

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
      
  