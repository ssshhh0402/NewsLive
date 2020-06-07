<template>
    <v-container>
        <v-card
            height="500"
            width="870"
            light="light"
            align-center="align-center"
            class="mx-auto card-pt text-center"
            
            >
                <h1>Topic News</h1>
                <v-carousel height=300 width =1000  hide-delimiters show-arrows-on-hover> 
                    <!-- <v-carousel-item v-for="k in length1" :key="k">  -->
                    <v-carousel-item
                        v-for="item in posts" v-bind:key="item.postId"
                    >
                        <v-row  >
                            <!-- <donation-list-detail :donationlist="donationlist[(k - 1)]" white/> -->
                            <NewsCard v-bind:post="item"></NewsCard>
                        </v-row>
                    </v-carousel-item>
            </v-carousel>
            
            <v-card style="left:10%; margin-top:1vw; width:80%; "
            >
                <v-card-text>
            <h3>keywords</h3>
            <h3>{{topic}}</h3>
                </v-card-text>
            </v-card>
            
        </v-card>
    </v-container>
</template>
<script>
import NewsCard from "./NewsCard/NewsCard.vue"
export default {
    props:['posts','topic'],
    components:{
        NewsCard,
    },
}
</script>
<style>
.card-pt{
    padding-top: 20px;
}
</style>