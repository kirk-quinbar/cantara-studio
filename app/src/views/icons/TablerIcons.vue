<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
const page = ref({ title: 'Tabler' });
const breadcrumbs = ref([
    {
        text: 'Icons',
        disabled: false,
        href: '#'
    },
    {
        text: 'Tabler',
        disabled: false,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" md="12">
            <v-card elevation="9">
                <v-card-text class="pa-5">
                    <div>
                        <p class="text-label-medium letter-spacing-0 text-uppercase">Visit <a href="https://tabler-icons.io/" class="text-primary text-decoration-none">Tabler Icons</a> to see all the icons.</p>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
