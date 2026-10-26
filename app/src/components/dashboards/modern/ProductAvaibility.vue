<script setup lang="ts">
import { ProductAvaibilityData } from '@/_mockApis/components/dashboards/ModernData';
import { ref } from 'vue';

const select = ref('Electronics');
const items = ref(['Electronics', 'Kitchen', 'Grocery', 'Wooden']);
</script>
<template>
    <VCard elevation="9">
        <v-card-text>
            <div class="d-flex justify-space-between align-center">
                <div>
                    <h3 class="card-title mb-1">Products Availability</h3>
                    <h5 class="card-subtitle">March 2026</h5>
                </div>
                <div>
                    <v-select v-model="select" :items="items" variant="outlined" elevation="0" class="text-body-large" hide-details></v-select>
                </div>
            </div>
            <v-table class="month-table mt-6">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-body-large font-weight-medium text-15">Product</th>
                            <th class="text-body-large font-weight-medium text-15">Description</th>
                            <th class="text-body-large font-weight-medium text-15">Quantity</th>
                            <th class="text-body-large font-weight-medium text-15 text-end">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in ProductAvaibilityData" :key="item.title" class="month-item-hover">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="45" :color="item.color">
                                        <icon icon="solar:cart-large-2-linear" height="20" />
                                    </v-avatar>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h4 class="text-14 text-no-wrap font-weight-medium">
                                        {{ item.title }}
                                    </h4>
                                    <p class="text-title-small text-no-wrap textSecondary">
                                        {{ item.subtitle }}
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p class="text-16 text-no-wrap textPrimary font-weight-medium">
                                    {{ item.qty }}
                                </p>
                            </td>
                            <td class="text-end">
                                <h4 class="text-no-wrap text-16 font-weight-medium">{{ item.price }}</h4>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-table>
        </v-card-text>
    </VCard>
</template>
