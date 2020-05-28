<template>
    <v-carousel
        height="550"
        width="1000"
        hide-delimiters="hide-delimiters"
        show-arrows-on-hover="show-arrows-on-hover">
        <v-carousel-item v-for="k in 5" :key="k">
            <v-row >
                <v-card class="mx-auto" max-width="344" outlined="outlined">
                    <v-list-item three-line="three-line">
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile="tile" size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text="text">Button</v-btn>
                        <v-btn text="text">Button</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto" max-width="344" outlined="outlined">
                    <v-list-item three-line="three-line">
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile="tile" size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text="text">Button</v-btn>
                        <v-btn text="text">Button</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
            <br>
            <v-row >
                <v-card class="mx-auto" max-width="344" outlined="outlined">
                    <v-list-item three-line="three-line">
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile="tile" size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text="text">Button</v-btn>
                        <v-btn text="text">Button</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto" max-width="344" outlined="outlined">
                    <v-list-item three-line="three-line">
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile="tile" size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text="text">Button</v-btn>
                        <v-btn text="text">Button</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto" max-width="344" outlined="outlined">
                    <v-list-item three-line="three-line">
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile="tile" size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn text="text">Button</v-btn>
                        <v-btn text="text">Button</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    // import axios from "axios"; import DonationListDetail from
    // "./DonationListDetail.vue";
    export default {
        components: {
            // DonationListDetail
        },
        data() {
            return {
                // donationlist: [],
                length1: 5
            };
        },
        methods: {
            // 받아오는 부분.
        },
        created() {
            // this.getData()
        }
    };
</script>