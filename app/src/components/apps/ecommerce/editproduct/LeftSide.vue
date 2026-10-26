<script setup lang="ts">
import { ref } from 'vue';
import GeneralTab from './GeneralTab.vue';
import AdvanceTab from './AdvanceTab.vue';
import ReviewsTab from './ReviewsTab.vue';
const tab = ref(null);
</script>
<template>
    <v-tabs v-model="tab" bg-color="transparent" height="60" color="primary" class="mb-8">
        <v-tab value="General" class="text-title-large rounded-0"> General</v-tab>
        <v-tab value="Advanced" class="text-title-large rounded-0">Advanced</v-tab>
        <v-tab value="Reviews" class="text-title-large rounded-0">Reviews</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="General"><GeneralTab /></v-window-item>
        <v-window-item value="Advanced"><AdvanceTab /></v-window-item>
        <v-window-item value="Reviews"><ReviewsTab /></v-window-item>
    </v-window>
</template>
