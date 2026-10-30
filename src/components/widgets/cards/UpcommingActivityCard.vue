<script setup lang="ts">
import { upcommingCards } from '@/_mockApis/components/widget/card';
</script>
<template>
    <v-card elevation="9">
        <v-card-item class="pb-sm-8 pb-6">
            <v-card-title class="text-headline-small">Upcoming Activity</v-card-title>
            <v-card-subtitle class="text-body-large mt-n1">In New year</v-card-subtitle>
            <div class="mt-sm-10 mt-5">
                <div class="d-flex align-center mt-6" v-for="list in upcommingCards" :key="list.title">
                    <v-avatar variant="text" :class="'rounded-md bg-light' + list.bgcolor" size="40">
                        <component :is="list.icon" :class="'text-' + list.bgcolor" stroke-width="2" size="20" />
                    </v-avatar>
                    <div class="pl-4 mt-n1">
                        <h5 class="text-title-large" v-text="list.title"></h5>
                        <h6 class="text-body-large text-medium-emphasis" v-text="list.subtitle"></h6>
                    </div>
                    <div class="ml-auto font-weight-medium text-body-large text-medium-emphasis" v-text="list.rank"></div>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
