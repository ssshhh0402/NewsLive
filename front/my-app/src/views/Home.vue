<template>
<div>
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
    
        <div class="hand">
			<img src="images/hand.png" alt="손">
		</div>
		<div class="leaflet">
			<div class="page" data-page="1">
				<div class="page-face cover-page">
					<p>News Card</p>
					<h1 class="menu-header-title">The News Live</h1>
				</div>
				<div class="page-face">
					<ul class="menu-list">
						<li class="menu-item">
							<figure class="menu-item-photo" style="background-image: url(images/econo.jpg)"></figure>
							<div class="menu-item-info">
								<p class="member-name">경 제</p>
								<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
							</div>
							<button class="back-btn">← Back</button>
						</li>
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
				</div>
			</div>
			<div class="page" data-page="2">
				<div class="page-face">
					<ul class="menu-list">
						<li class="menu-item">
							<figure class="menu-item-photo" style="background-image: url(images/sport.png)"></figure>
							<div class="menu-item-info">
								<p class="member-name">스 포 츠</p>
								<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
							</div>
							<button class="back-btn">← Back</button>
						</li>
						<li class="menu-item">
							<figure class="menu-item-photo" style="background-image: url(images/stock.jpg)"></figure>
							<div class="menu-item-info">
								<p class="member-name">증 시</p>
								<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
							</div>
							<button class="back-btn">← Back</button>
						</li>
					</ul>
				</div>
				<div class="page-face">2B</div>
			</div>
			<div class="page" data-page="3">
				<div class="page-face cover-page">
					<p class="message">Welcome!</p>
				</div>
				<div class="page-face">
					<ul class="menu-list">
						<li class="menu-item">
							<figure class="menu-item-photo" style="background-image: url(images/it.jpg)"></figure>
							<div class="menu-item-info">
								<p class="member-name">I T</p>
								<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
							</div>
							<button class="back-btn">← Back</button>
						</li>
						<li class="menu-item">
							<figure class="menu-item-photo" style="background-image: url(images/hot.jpg)"></figure>
								<div class="menu-item-info">
								<p class="member-name">HOT Issue</p>
								<p class="member-info">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti excepturi asperiores.</p>
							</div>
							<button class="back-btn">← Back</button>
						</li>
					</ul>
					<button class="close-btn">✗ Close</button>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>
<script >
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                search: null
                };
        },
        created(){
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '../js/main.js')
            document.head.appendChild(recaptchaScript)
            console.log(recaptchaScript)
        },
        methods: {
            goSearch(content) {
                console.log(content)
            },
        },
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

