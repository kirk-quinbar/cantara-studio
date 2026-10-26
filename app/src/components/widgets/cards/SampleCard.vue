<script setup lang="ts">
import { ref } from 'vue';
const cards = ref([
    {
        color: 'secondary'
    },
    {
        color: 'error'
    },
    {
        color: 'primary'
    },
    {
        color: 'success'
    },
    {
        color: 'warning'
    },
    {
        color: 'info'
    }
]);
</script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Sample Card -->
    <!-- ----------------------------------------------------------------------------- -->
    <v-row>
        <v-col cols="12" lg="4" v-for="(item, i) in cards" :key="i">
            <v-card elevation="9" class="overflow-hidden">
                <v-card-item :class="'py-4 px-6 text-white bg-' + item.color">
                    <h4 class="text-title-large">Card Title</h4>
                </v-card-item>
                <v-card-text class="pa-6">
                    <h5 class="text-title-large title">Special title treatment</h5>
                    <p class="text-body-large textSecondary mt-3">With supporting text below as a natural lead-in to additional content.</p>
                    <v-btn variant="flat" class="mt-4 text-white" :color="item.color">Go Somewhere</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
