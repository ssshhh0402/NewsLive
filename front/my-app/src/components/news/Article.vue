<template>
<!--모든   -->
    <div class="mb-3 back">

    </div>
</template>
<script>
    export default {
        props: ["CardList"],
        data() {
            return {
               
            }
        },
        methods: {
            Back()
            {
                this.dialog=false;
            },
            goFollow()
            {
                //내 정보와 그 기사의 정보에서 user_email이 저장되어야한다. 
            }
        },
    };
</script>
<style>
.back {
    background-image: url('/assets/BackNews.JPG');
    }
</style>