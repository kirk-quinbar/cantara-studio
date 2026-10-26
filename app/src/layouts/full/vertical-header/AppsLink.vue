<script setup lang="ts">
import { appsLink } from '@/_mockApis/headerData';
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- apps link -->
    <!-- ---------------------------------------------- -->
    <v-row>
        <v-col cols="12" md="6" v-for="(item, i) in appsLink" :key="i">
            <RouterLink :to="item.href" class="text-decoration-none">
                <div class="d-flex align-center">
                    <v-avatar size="40" :color="'light' + item.color" rounded="circle">
                        <Icon :icon="'solar:' + item.avatar" height="18" :class="'text-' + item.color" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-body-large heading textPrimary hover-primary font-weight-medium">{{ item.title }}</h6>
                        <p class="text-title-small textSecondary">{{ item.subtext }}</p>
                    </div>
                </div>
            </RouterLink>
        </v-col>
    </v-row>
</template>
