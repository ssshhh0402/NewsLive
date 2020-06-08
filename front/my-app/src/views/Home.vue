<template>
    <div>
        <div class="back_g" style="height:445px" >
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
                                flat
                                solo
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
		<Catalogy v-if="dialog"
			:allNews="allNews"
		></Catalogy>
		<SubHome v-else ref="subHome"></SubHome>
		<br>
		<br>
    </div>
</template>
	<script >
		import axios from "axios";
        import { API_BASE_URL } from "../config";
		import SubHome from "./SubHome.vue"
		import Catalogy from "./Catalogy.vue"
		export default {
			components: {
				Catalogy,
				SubHome
			},
			data() {
				return {
                    search: null,
					number :-1,
					EachNewsList:{},
					allNews:{},
					dialog: false
					
					};
			},
			 created() 
            {
                this.getData();
            },
			methods: {
				goSearch(newContent) {
					console.log(newContent);
					if (event.keyCode == 13){
						this.search = newContent;
						if (this.search.length == 0){
							this.$refs.subHome.getRecent();
							this.$refs.subHome.$forceUpdate();
						}else{
						console.log("여기는 Home : " + this.search);
						this.$refs.subHome.findByTitle(this.search);
						}
					}
                },
                goRouter(num){
					if( this.number == num)
					{
						this.dialog =!this.dialog ;
					}
					else if( this.number == -1)
					{
						this.dialog =!this.dialog ;
						this.number= num 
						this.allNews= this.EachNewsList[num].posts
					}
					else{
						this.number= num 
						this.allNews= this.EachNewsList[num].posts
					}
				},
				getData() {
                    axios
                        .get(API_BASE_URL + "/api/v1/posts/kinds")
                        .then(response => {
                            this.EachNewsList = response.data;
                            // console.log("전체 리스트",this.EachNewsList);
                        })
                        .catch(() => {})
                },
	
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