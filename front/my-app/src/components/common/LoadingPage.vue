<template>
<div>
</div>
</template>
<script>
export default {
    props:['id'],
    mounted(){
            this.$router.push({name:'newsdetail',params: { id: this.id }});
    }
}
</script>
