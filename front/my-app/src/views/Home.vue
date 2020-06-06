<template>
    <div>
		<home-nav></home-nav>
		<div class= "mt-5">
    <v-row>
      <!-- font-family = 'Open Sans' -->
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="4">
        <div align="left" class="mt-7">
        <span  class="blue--text font-weight-bold " style="font-size:40px;">The News Live</span>
        <br><br>  
          <div align="left" class="gray font-weight-bold mt-6" style="font-size:19px;">
          <div class="h1"><strong>최근 기사 <span class="h5"><strong>~~~~~ </strong></span></strong></div>
          </div> 
           <br> 
           <v-divider></v-divider>
          <v-btn 
            class=" mt-5"
            style="background: #7FD4D9"
            color="deep-sky"
            dark
            large
            @click="goIntro"
          > 
          <div class="mb-2 mr-2 font-weight-bold ">블록체인, 뉴스확인하시겠어요?</div> 
          <v-avatar></v-avatar>
        </v-btn>
        <v-btn 
            class=" mt-3 pink"
            color="deep-sky"
            dark
            large
            @click="goBlockChain"
          > 
          <div class="mb-2">더뉴스라이브를 소개 페이지 가기</div> 
          <v-avatar></v-avatar>
          <v-icon class ="mb-2">mdi-click </v-icon>
        </v-btn>
         <br>
          <br>
         </div>
      </v-col> 
      <v-col  cols="12" md="5" >
        <v-carousel  hide-delimiters show-arrows-on-hover interval="4000"> 
        <v-carousel-item v-for="k in 4" :key="k"> 
            <v-row >
				<v-hover v-slot:default="{ hover }">
					<v-card
						light="light"
						align-center="align-center"
						:elevation="hover ? 16 : 2"
						class="mx-auto">
						<v-img
							class="white--text align-end"
							height="500px"
							src= "../assets/backnews.jpg"
						>
						<v-card-text>
							
						</v-card-text>
						<v-card-actions>
							<v-btn text="text" color="deep-purple accent-4">
								Read
							</v-btn>
							<v-btn text="text" color="deep-purple accent-4">
								Bookmark
							</v-btn>
						</v-card-actions>
						</v-img>
					</v-card>
			</v-hover>
            </v-row>
        </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    </div>
	<br>
	<div class="back_g" style="height:570px">
		<br>
		
		
			<!-- <ul class="menu-list">
				<ul>
					
					<button class="back-btn">← Back</button>
				</ul>
				<li class="menu-item">
					<figure class="menu-item-photo" style="background-image: url(images/social1.jpg)"></figure>
					<div class="menu-item-info">
						<p class="member-name">정 치</p>
						<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
					</div>
					<button class="back-btn">← Back</button>
				</li>
				<li class="menu-item">
					<figure class="menu-item-photo" style="background-image: url(images/entertain.jpg)"></figure>
					<div class="menu-item-info">
						<p class="member-name">사 회</p>
						<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
					</div>
					<button class="back-btn">← Back</button>
				</li>
			</ul>
		</div> -->


	</div>
	<div style="background: (58, 76, 168); height:570px">
		
	</div>
</div>
</template>
    <script >
	import HomeNav from "./HomeNav.vue";
		export default {
			components: {HomeNav},
			data() {
				return {search: null};
			},
			created() {},
			methods: {
				goSearch(content) {
					console.log(content)
				}
			}
		}
    </script>
    <style>
	.back_g{
		background: #654ea3;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #eaafc8, #654ea3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	</style>