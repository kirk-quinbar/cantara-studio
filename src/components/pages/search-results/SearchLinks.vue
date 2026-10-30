<script setup lang="ts">
import { SearchLinkData } from '@/_mockApis/components/pages/searchLinks';
import { RouterLink } from 'vue-router';
</script>
<template>
    <v-card elevation="9">
        <v-card-item>
            <h5 class="text-headline-small">Search Result For "Angular Js"</h5>
            <p class="textSecondary text-body-large">About 14,700 result ( 0.10 seconds)</p>
            <div class="mt-4">
                <div class="border-b py-5" v-for="item in SearchLinkData" :key="item.title">
                    <h6 class="text-headline-small">{{ item.title }}</h6>
                    <RouterLink class="text-primary text-decoration-none text-body-large" :to="item.url">{{ item.linktitle }}</RouterLink>
                    <p class="text-textSecondary text-body-large">{{ item.subtitle }}</p>
                </div>
                <div class="mt-6 d-flex justify-start">
                    <v-pagination :length="4" rounded="0"></v-pagination>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
