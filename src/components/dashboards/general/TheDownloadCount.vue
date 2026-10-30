<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: '',
                data: [4, 5, 2, 10, 9, 12, 4, 9, 4, 5, 3, 10]
            }
        ],
        chart: {
            type: 'bar',
            fontFamily: 'inherit',
            height: '70px',
            foreColor: '#adb0bb',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors: ['rgba(255, 255, 255, 0.7)'],
        grid: {
            show: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                startingShape: 'flat',
                endingShape: 'flat',
                columnWidth: '30%',
                barHeight: '100%',
                borderRadius: 2
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        axisBorder: {
            show: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: 'dark',
            style: {
                fontSize: '12px',
                fontFamily: 'inherit'
            },
            x: {
                show: false
            },
            y: {
                formatter: undefined
            }
        }
    };
});
</script>
<template>
    <VCard elevation="9" class="overflow-hidden ">
        <v-card-text class="bg-secondary">
            <div class="d-flex align-center">
                <v-avatar variant="text" class="bg-white-opacity" size="48">
                    <Icon icon="solar:chart-2-linear" class="text-white" height="25" />
                </v-avatar>
                <div class="mx-4">
                    <h3 class="text-headline-small">Download Count</h3>
                    <div class="text-body-large opacity-80">March 2026</div>
                </div>
            </div>
            <v-row class="pt-8 d-flex justify-space-between">
                <v-col cols="4" class="d-flex align-center">
                    <h2 class="font-weight-medium h2">35487</h2>
                </v-col>
                <v-col cols="8" class="d-sm-flex">
                    <div class="ms-auto">
                        <apexchart type="bar" height="60" width="190" :options="chartOptions" :series="chartOptions.series"></apexchart>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </VCard>
</template>
