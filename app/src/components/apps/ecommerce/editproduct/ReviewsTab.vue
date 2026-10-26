<script lang="ts" setup>
import { ProductreviewData } from '@/_mockApis/apps/ecommerce/Editproduc';
</script>
<template>
    <div class="pa-1">
        <v-card elevation="9" class="mb-6">
            <v-card-text>
                <h5 class="text-headline-small mb-8">Customer Reviews</h5>

                <v-table class="month-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-body-large">Rating</th>
                                <th class="text-body-large">Customer</th>
                                <th class="text-body-large">Comment</th>
                                <th class="text-body-large text-end">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in ProductreviewData" :key="item.name" class="month-item">
                                <td>
                                    <v-rating
                                        v-model="item.review"
                                        half-increments
                                        size="small"
                                        color="warning"
                                        density="compact"
                                    ></v-rating>
                                </td>
                                <td>
                                    <div class="d-flex gap-2 align-center">
                                        <v-avatar variant="text" size="30"> <img :src="item.image" :alt="item.image" width="30" /></v-avatar>
                                        <h6 class="text-body-large text-no-wrap">{{ item.name }}</h6>
                                    </div>
                                </td>
                                <td>
                                    <p style="max-width: 280px" class="text-body-large textSecondary">
                                        {{ item.comment }}
                                    </p>
                                </td>
                                <td class="text-end">
                                    <p class="text-body-large textSecondary">{{ item.date }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </v-card-text>
        </v-card>
    </div>
    <div class="d-flex mb-md-0 mb-3 gap-3">
        <v-btn flat color="primary"> save changes </v-btn>
        <v-btn variant="tonal" color="error"> cancel </v-btn>
    </div>
</template>
