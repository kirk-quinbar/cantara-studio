<script setup lang="ts">
import { ref } from 'vue';
import ProductDescription from './ProductDescription.vue';
import ProductReview from './ProductReview.vue';

const tab = ref(null);
</script>

<template>
    <v-card elevation="9">
        <v-card-item>
            <v-tabs v-model="tab" color="primary" class="border-bottom">
                <v-tab value="one" rounded="0">Description</v-tab>
                <v-tab value="two" rounded="0">Review</v-tab>
            </v-tabs>
            <div class="mt-5">
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <ProductDescription />
                    </v-window-item>
                    <v-window-item value="two">
                        <ProductReview />
                    </v-window-item>
                </v-window>
            </div>
        </v-card-item>
    </v-card>
</template>
