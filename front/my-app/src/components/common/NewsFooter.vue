<template>
    <v-footer
        absolute="absolute"
        class="font-weight-medium">
        <v-row>
            <v-col cols="4" class="text-center">
                <a href="https://www.ssafy.com"><strong>SSAFY</strong></a>
            </v-col>
            <v-col cols="4" class="text-center">
            <strong>New Deal</strong>
            —
            {{ new Date().getFullYear() }}

            </v-col>
        <v-col cols="4" class="text-center">
              <v-btn text="text" v-if="$store.state.isSigned" @click = goAd();>
                광고등록
            </v-btn>
            <v-btn text="text" v-if="$store.state.isSigned" @click = goHelp();>
                문의하기
            </v-btn>
        </v-col>
        
        </v-row>
    </v-footer>
</template>
<style>

a:link {text-decoration: none; color: #333333;}
a:visited {text-decoration: none; color: #333333;}
a:active {text-decoration: none; color: #333333;}
a:hover {text-decoration: underline; color: blue;}

</style>