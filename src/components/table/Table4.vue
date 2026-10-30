<script setup lang="ts">
import { basicTableData4, tableActionData } from '@/_mockApis/components/table/basicTables';
</script>
<template>
    <v-card elevation="0" class="mt-6 border">
        <v-table class="month-table">
            <thead>
                <tr>
                    <th class="text-title-large">Invoice</th>
                    <th class="text-title-large">Status</th>
                    <th class="text-title-large">Customer</th>
                    <th class="text-title-large">Progress</th>
                    <th class="text-title-large"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in basicTableData4" :key="item.name" class="month-item">
                    <td>
                        <h6 class="text-body-large">{{ item.invoice }}</h6>
                    </td>
                    <td>
                        <v-chip rounded="lg" class="font-weight-bold py-4 pl-1 pr-2" :color="item.statuscolor" size="small">
                            <component :is="item.statusicon" stroke-width="2" size="18" class="mr-1" />
                            {{ item.status }}
                        </v-chip>
                    </td>
                    <td>
                        <div class="d-flex align-center">
                            <v-avatar variant="text" size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-title-large">{{ item.name }}</h6>
                                <div class="text-body-large text-medium-emphasis">{{ item.handle }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-center">
                            <div class="w-100">
                                <v-progress-linear color="primary" rounded="sm" :model-value="item.progress"></v-progress-linear>
                            </div>
                            <span class="text-body-large text-medium-emphasis ml-5">{{ item.progress }}%</span>
                        </div>
                    </td>
                    <td>
                        <v-btn size="30" icon variant="flat" class="grey100">
                            <v-avatar variant="text" size="22">
                                <DotsVerticalIcon size="20" color="grey100" />
                            </v-avatar>
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item
                                        value="action"
                                        v-for="list in tableActionData"
                                        :key="list.listtitle"
                                        hide-details
                                        min-height="38"
                                    >
                                        <v-list-item-title>
                                            <v-avatar variant="text" size="20" class="mr-2">
                                                <component :is="list.icon" stroke-width="2" size="20" />
                                            </v-avatar>
                                            {{ list.listtitle }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
