<template>
    <v-container>
        <v-card
            height="500"
            width="870"
            light="light"
            align-center="align-center"
            :elevation="hover ? 16 : 2"
            class="mx-auto card-pt text-center"
            
            >
            <h1>안녕하세요!</h1>
                <v-carousel height=300 width =1000  hide-delimiters show-arrows-on-hover> 
                    <!-- <v-carousel-item v-for="k in length1" :key="k">  -->
                    <v-carousel-item>
                        <v-row >
                            <!-- <donation-list-detail :donationlist="donationlist[(k - 1)]" white/> -->
                            <NewsCard></NewsCard>
                        </v-row>
                    </v-carousel-item>
                    
            </v-carousel>
            
        </v-card>
    </v-container>
</template>
<script>
import NewsCard from "./NewsCard/NewsCard.vue"
export default {
    components:{
        NewsCard,
    }
}
</script>
<style>
.card-pt{
    padding-top: 20px;
}
</style>