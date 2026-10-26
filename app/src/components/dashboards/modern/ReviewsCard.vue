<script setup lang="ts">
import { MoodEmptyIcon, MoodSadIcon, MoodSmileBeamIcon } from 'vue-tabler-icons';
</script>

<template>
    <VCard elevation="9" class="overflow-hidden">
        <v-card-text class="pb-12">
            <v-row>
                <v-col cols="12" lg="6">
                    <h3 class="card-title mb-3">Reviews</h3>
                    <div class="text-40 textSecondary">31560</div>
                    <p class="text-body-large textSecondary">April the product got 234 reviews</p>
                    <div class="d-flex ga-3 align-center my-5">
                        <v-avatar variant="text" size="50" class="cursor-pointer">
                            <img src="@/assets/images/profile/user-2.jpg" height="50" alt="users" />
                        </v-avatar>
                        <v-avatar variant="text" size="50" class="cursor-pointer">
                            <img src="@/assets/images/profile/user-3.jpg" height="50" alt="users" />
                        </v-avatar>
                        <v-avatar variant="text" size="50" class="cursor-pointer">
                            <img src="@/assets/images/profile/user-4.jpg" height="50" alt="users" />
                        </v-avatar>
                        <v-avatar variant="text" size="50" class="cursor-pointer">
                            <img src="@/assets/images/profile/user-5.jpg" height="50" alt="users" />
                        </v-avatar>
                    </div>
                    <v-btn color="success" rounded="pill" class="mt-2">Read Reviews</v-btn>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="py-4">
                        <div class="d-flex ga-2">
                            <MoodSmileBeamIcon size="48" class="textSecondary" />
                            <div>
                                <h5 class="text-headline-small">Positive Reviews</h5>
                                <p class="text-body-large textSecondary">25547 Reviews</p>
                            </div>
                        </div>
                        <v-progress-linear
                            model-value="65"
                            color="success"
                            bg-color="grey200"
                            class="mt-2"
                            rounded
                            height="5"
                        ></v-progress-linear>
                    </div>
                    <div class="py-4">
                        <div class="d-flex ga-2">
                            <MoodSadIcon size="48" class="textSecondary" />
                            <div>
                                <h5 class="text-headline-small">Negative Reviews</h5>
                                <p class="text-body-large textSecondary">5478 Reviews</p>
                            </div>
                        </div>
                        <v-progress-linear
                            model-value="15"
                            color="error"
                            bg-color="grey200"
                            class="mt-2"
                            rounded
                            height="5"
                        ></v-progress-linear>
                    </div>
                    <div class="py-4">
                        <div class="d-flex ga-2">
                            <MoodEmptyIcon size="48" class="textSecondary" />
                            <div>
                                <h5 class="text-headline-small">Neutral Reviews</h5>
                                <p class="text-body-large textSecondary">457 Reviews</p>
                            </div>
                        </div>
                        <v-progress-linear
                            model-value="35"
                            color="primary"
                            bg-color="grey200"
                            class="mt-2"
                            rounded
                            height="5"
                        ></v-progress-linear>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </VCard>
</template>
