<template>
    <div>
        <div class="back_g" style="height:390px" >
                <v-row justify="center">
                    <v-col align="center">
                        <div align="center" class="gray font-weight-bold mt-9" style="font-size:19px;">
                            <span
                                class="white--text text--lighten-1 font-weight-bold "
                                style="font-size:40px;">Good News For The World
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
                                label="뉴스 검색 및 유저 검색"
                                @keyup.enter="goSearch(search)"></v-text-field>
                        </div>
                    </v-col>
                </v-row>
				<br> 
				<v-row >
			<v-col cols="2">
			<div class="text-center" @click="goRouter(0)" >
			<v-avatar size="100px" ><v-img src="../assets/econo.jpg"></v-img></v-avatar>
						<div class="mt-2  white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;"> 경제
						</div>
			</div>
			</v-col>
			<v-col cols="2">
					<div class="text-center" @click="goRouter(1)">
					<v-avatar size="100px" ><v-img src="../assets/sport.png"></v-img></v-avatar>
						<div
							class="mt-2  white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;">  스포츠
						</div>
					</div>
			</v-col>
			<v-col cols="2">
					<div class="text-center" @click="goRouter(2)">
					<v-avatar size="100px" ><v-img src="../assets/social1.jpg"></v-img></v-avatar>
						<div 
							class=" mt-2 white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;">  사회
						</div>
					</div>
			</v-col>
			<v-col cols="2">
					<div class="text-center" @click="goRouter(3)">
					<v-avatar size="100px" ><v-img src="../assets/stock.jpg"></v-img></v-avatar>
						<div 
							class=" mt-2 white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;"> 증시
						</div>
					</div>
			</v-col>
			<v-col cols="2">
					<div class="text-center" @click="goRouter(4)">
					<v-avatar size="100px" ><v-img src="../assets/it.jpg"></v-img></v-avatar>
						<div 
							class=" mt-2 white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;"> I T
						</div>
					</div>
			</v-col>
			<v-col cols="2">
					<div class="text-center" @click="goRouter(5)">
					<v-avatar size="100px" ><v-img src="../assets/entertain.jpg"></v-img></v-avatar>
						<div 
							class=" mt-2 white--text  text--lighten-1 font-weight-bold "
							style="font-size:20px;"> 연예
						</div>
					</div>
			</v-col>
		</v-row>
        </div>
        <br>
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
          > 
          <div class="mb-2 mr-2 font-weight-bold ">블록체인, 뉴스확인하시겠어요?</div> 
          <v-avatar></v-avatar>
        </v-btn>
        <v-btn 
            class=" mt-3 pink"
            color="deep-sky"
            dark
            large
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
    </div>
</template>
    <script >
		export default {
			components: {},
			data() {
				return {
                    search: null,
                    number :-1 
                    };
			},
			created() {},
			methods: {
				goSearch(content) {
					console.log(content)
                },
                goRouter(num){
                    console.log(num)
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