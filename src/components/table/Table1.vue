<script setup lang="ts">
import { basicTableData1 } from '@/_mockApis/components/table/basicTables';
</script>
<template>
    <v-card class="border" elevation="0">
        <v-table class="month-table">
            <thead>
                <tr>
                    <th class="text-title-large">Users</th>
                    <th class="text-title-large">Project Name</th>
                    <th class="text-title-large">Team</th>
                    <th class="text-title-large">Status</th>
                    <th class="text-title-large">Budget</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in basicTableData1" :key="item.name" class="month-item">
                    <td>
                        <div class="d-flex align-center">
                            <v-avatar variant="text" size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-title-large">{{ item.name }}</h6>
                                <div class="text-body-large text-medium-emphasis">{{ item.post }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h6 class="text-title-large font-weight-medium text-medium-emphasis">{{ item.pname }}</h6>
                    </td>
                    <td>
                        <div class="d-flex align-center">
                            <div class="ml-2 d-flex flex-row-reverse">
                                <v-avatar variant="text"
                                    v-for="team in item.teams"
                                    :key="team.id"
                                    size="35"
                                    :class="'ml-n2 avtar-border bg-' + team.color"
                                >
                                    {{ team.text }}
                                </v-avatar>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-chip rounded="md" class="font-weight-bold" :color="item.statuscolor" size="small" label>{{
                            item.status
                        }}</v-chip>
                    </td>
                    <td>
                        <h6 class="text-title-large">{{ item.budget }}</h6>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
