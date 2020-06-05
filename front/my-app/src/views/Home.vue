<template>
	<div >
      <div class=" home">
        <v-img src="../assets/Main_banner.png" id="desk" :aspect-ratio="1520/270">
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
                            label="뉴스 검색 및 유저 검색"
                            @keyup.enter="goSearch(search)"></v-text-field>
                    </div>
                </v-col>
            </v-row>
        </v-img>
		<br>  
		<div class ="Homebody mt-2 mb-9">
			<div class=" leaflet" >
					<div class="page1">
					<div class="page-face" data-page="1">	
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
			
				<div class="page3">
					<div class="page-face">	

					</div>
				</div>
			</div>
		</div>
		<!-- <div class ="Homebody mt-2 mb-9">
			<div class=" leaflet" >
				<div class="page" data-page="1">
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
		</div> -->
	
	</div>
		<br>
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
			document.body.appendChild(recaptchaScript)
			console.log(document)
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
.Homebody{
	perspective: 1500px;
}
.leaflet {
	position: relative;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 30vw;
	height: 30vw;
	margin: auto;
	transform-style: preserve-3d;
	transition: 1s;
	cursor: pointer;
	animation: start-ani 1s forwards;
}
.page1 {
	transform: rotateY(-130deg);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	font-size: 3rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px;
	transform-style: preserve-3d;
	transition: 1s;
}
.page2 {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	font-size: 3rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px;
	transform-style: preserve-3d;
	transition: 1s;
}
.page3 {
	transform: rotateY(170deg);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	font-size: 3rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px;
	transform-style: preserve-3d;
	transition: 1s;
}

.page:nth-child(1) {
	z-index: 2;
	transform-origin: left;
}
.page:nth-child(3) {
	z-index: 1;
	transform-origin: right;
}

.page-face {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgb(218, 204, 152);
	/* 페이지 색깔.  */
	/* backface-visibility: hidden; */
	transform-style: preserve-3d;
}
.page-face:nth-child(2) {
	transform: rotateY(180deg);
}
.page:nth-child(1) .page-face:nth-child(2),
.page:nth-child(2) .page-face:nth-child(1),
.page:nth-child(3) .page-face:nth-child(2) {
	background: rgb(214, 212, 212);
}
/* .cover-page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
}
.cover-page::before {
	content: '';
	display: block;
	position: absolute;
	left: 10px;
	right: 10px;
	top: 10px;
	bottom: 10px;
	border: 1px solid tan;
} */
.menu-header-title {
	font-family: 'Courgette', cursive;
}
.menu-list {
	font-size: 0.7rem;
}
.menu-item {
	display: flex;
	align-items: center;
	position: relative;
	padding: 2em;
	transition: 0.5s;
}
.back-btn {
	display: none;
	position: absolute;
	right: 10px;
	top: 10px;
}
.current-menu .back-btn {
	display: inline-block;
}
.menu-item-photo {
	width: 20%;
	padding-bottom: 20%;
	flex-shrink: 0;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}
.menu-item-info {
	flex: 1;
	margin-left: 1em;
}
.member-name {
	font-size: 1rem;
	font-weight: bold;
}
.close-btn {
	display: none;
	position: absolute;
	top: -2rem;
	right: 10px;
	font-size: 1.2rem;
	color: #fff;
	text-shadow: rgba(0, 0, 0, 0.3) 0 1px 0;
	backface-visibility: hidden;
}
.leaflet-opened .close-btn {
	display: inline-block;
}


</style>

