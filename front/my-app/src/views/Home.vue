<template>
    <div class="home">
        <v-img src="../assets/Main_banner.png" id="desk" :aspect-ratio="1520/350">
            <v-row justify="center">
                <v-col align="center">
                   <div align="center" class="gray font-weight-bold mt-9" style="font-size:19px;">
                     <span  class="white--text text--lighten-1 font-weight-bold " style="font-size:40px;">Good News For The World
                     </span>
                    </div>
                    <div class="searchbar mt-7 mr-0 mr-md-6" style="max-width: 800px;">
                        <v-text-field
                            v-model="search"
                            clearable="clearable"
                            flat="flat"
                            solo-inverted="solo-inverted"
                            hide-details="hide-details"
                            background-color="white"
                            label="뉴스 검색"
                            @keyup.enter="goSearch(search)"></v-text-field>
                    </div>
                </v-col>
            </v-row>
        </v-img>
        <div class="world">
            <div class="stage">
                <div class="house">
                    <section class="news news-a">안녕</section>
                    <section class="news news-b">안녕</section>
                    <section class="news news-c">ㅇㅇ</section>
                </div>
            </div>
            <div>
                <footer>
                ㅇㅇㅇㅇ
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        components: {},
        methods: {
            goSearch(content) {
                console.log(content)
            }
        }
    }
</script>
<style>
.font-weight-bold {
  font-weight: 700 !important;
}

.world {
    display: flex;
    flex-direction: column;
    position: static;
    /* left: -100%;
    top: 31vh; */
    width: 300vw;
    height: 50vh;
    perspective: 1000px;
}

.stage {
    position: static;
    width : 300vw;
    height : 50vh;
    transform-style: preserve-3d;
}

.house {
    width: 300vw;
    height: 50vh;
    transform: translateX(-100vw);
    transform-style: preserve-3d;
}

.news {
    position: absolute;
    left: 0;
    top: 0;
    width: 300vw;
    height: 50vh;
}

.news-a {
    transform: translateX(0vw);
    background: dodgerblue;
}

.news-b {
    transform: translateX(200vw);
    background: firebrick;
}

.news-c {
    transform: translateX(300vw);
    background: forestgreen;
}


</style>