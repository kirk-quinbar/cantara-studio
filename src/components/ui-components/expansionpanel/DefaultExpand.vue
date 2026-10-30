<script setup lang="ts">
import { ref } from 'vue';
const panel = ref([0]);
</script>
<template>
    <v-expansion-panels v-model="panel">
        <v-expansion-panel elevation="9">
            <v-expansion-panel-title class="text-title-large">Accordion 1</v-expansion-panel-title>
            <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.</v-expansion-panel-text
            >
        </v-expansion-panel>
        <v-divider></v-divider>
        <v-expansion-panel elevation="9">
            <v-expansion-panel-title class="text-title-large">Accordion 2</v-expansion-panel-title>
            <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.</v-expansion-panel-text
            >
        </v-expansion-panel>
        <v-divider></v-divider>
        <v-expansion-panel elevation="9">
            <v-expansion-panel-title class="text-title-large">Accordion 3</v-expansion-panel-title>
            <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.</v-expansion-panel-text
            >
        </v-expansion-panel>
    </v-expansion-panels>
</template>
