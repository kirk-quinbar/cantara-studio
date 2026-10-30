<script setup lang="ts">
import { ref } from 'vue';
</script>
<template>
    <div class="d-flex flex-column gap-1">
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small text-primary">Text Primary</h5>
            <div class="text-body-large text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small textSecondary">Text Secondary</h5>
            <div class="text-body-large textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small text-info">Text Info</h5>
            <div class="text-body-large textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small text-warning">Text Warning</h5>
            <div class="text-body-large text-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small text-error">Text Error</h5>
            <div class="text-body-large text-error">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-headline-small text-success">Text Success</h5>
            <div class="text-body-large text-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
    </div>
</template>
