<template>
    <div style="padding: 80px 0px 0px 0px">
        <v-container>
            <h2>내 정보
                <v-btn class="ma-2" outlined="outlined" large="large" fab="fab" width="40px"
                    height="40px" style="color: #00AAB3;">
                    <v-icon @click="goUserModifyPage">mdi-pencil</v-icon>
                </v-btn>
            </h2>
            <v-row class="mb-4">
                <v-col>
                    <user-detail :userInfo="userInfo" v-if="userInfo" />
                </v-col>
            </v-row>
            <v-row>
                <v-icon>star</v-icon>
                <span>&nbsp;스크랩 공고</span>
            </v-row>
            <v-row class="mb-4">
                <v-col v-if="userInfo" class="px-0">
                    <user-recruit :userInfo="userInfo" v-on:update="update" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: "userdetail",
        props: {userInfo:{type: Object}},
    }
</script>