<template>
    <div>
		<div class= "mt-5">
		   <v-row>
              <v-col cols="12" md="2"></v-col>
              <v-col cols="12" md="4">
                <div align="left" class="mt-7">
                <span  class="blue--text font-weight-bold " style="font-size:40px;">The News Live</span>
                <br><br>  
                  <div align="left" class="gray font-weight-bold mt-6" style="font-size:19px;">
                  <div class="h1"><strong>최근 기사 <span class="h5"><strong>보러가기 -> </strong></span></strong></div>
                  </div> 
                  <br> 
                  <v-divider></v-divider>
                  <v-btn 
                    class=" mt-5 bk"
                    width="80%"
                    v-for="item in posts"
                    v-bind:key="item.id"
                    dark
                    large
                    @click="goIntro(item)"
                  > 
                  <div class="mb-2 mr-2 font-weight-bold ">{{item.title}}</div> 
                </v-btn>
                </div>
              </v-col> 
              <v-col cols="12" md="5" >
				<div  class = "mt-7">
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
				</div>
              </v-col>
            </v-row>
    	</div>
	<br>
	<div class="back_g" style="height:570px">
		<br>
	</div>
	<div style="background: (58, 76, 168); height:570px">
		
	</div>
</div>
</template>
    <script >
	  import axios from "axios";
		export default {
			data() {
				return {
					search: null,
					posts: [],

				};
			}, 
			mounted(){
     		 	this.getRecent();
    		},
			methods: {
				goSearch(content) {
					console.log(content)
				},
				goIntro(obj)
				{
					console.log("작업필요 SubHome으로오세요 ")
				}
				,
				getRecent(){
					axios
					.get('http://k02b2041.p.ssafy.io:8080/api/v1/posts/desc')
					.then(response=>{
						// console.log("getRecent()",response.data);
						this.posts = response.data;
					})
					.catch(e=>{
						console.error(e);
					})
				},
				breakpointObject() {
					// Use in computed property
					switch (this.vuetify.breakpoint.name) {
						case 'xs': return '220px'
						case 'sm': return '400px'
						case 'md': return '500px'
						case 'lg': return '600px'
						case 'xl': return '800px'
					}
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
	.test {
		background: linear-gradient(to right, #fbcac9, #8ca6ce);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.bk{
    background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 90vh;
    width: 100%;
    padding:5vw;
}

	</style>