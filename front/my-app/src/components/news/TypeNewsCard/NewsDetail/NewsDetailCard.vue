<template>
<v-container>
  <v-card
    class="mx-auto card-mb"
    max-width="400"
    @click="goDetail()"
  >
  <div class="div-bc">
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="img==='NO'?require('../../../../assets/newsBK2.png'):img"
    >
      <v-card-title>
          <v-btn class="del" rounded color="black" dark large>{{title}}</v-btn>
          </v-card-title>
    </v-img>
  </div>
  </v-card>
</v-container>
</template>
<script>
export default {
    props:['title','img','id'],
    methods:{
                  goDetail(){
                    console.log(this.id);
                 this.$router.push({name:'loading',params: { id: this.id }});
            }
    }
}
</script>
<style>
.card-mb{
    margin-bottom: 3px;
}
.div-bc{
    background-color: black;
}
	.del{
		width:100%;
        padding:10px 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
 	 	overflow: hidden;
	}
</style>
      
  