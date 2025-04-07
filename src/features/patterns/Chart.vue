<script setup lang="ts">
import { computed } from 'vue';
import { usePatternsStore } from './store';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import Button from '@/components/Button.vue';
import Select from '@/components/Select.vue';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const patternsStore = usePatternsStore();

const timeRanges = [
  { label: 'Today', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
] as const;

const metrics = [
  {
    label: 'Energy',
    value: 'energy',
    color: '#fd9a00', // energy-high
    backgroundColor: 'rgba(253, 154, 0, 0.1)',
  },
  {
    label: 'Focus',
    value: 'focus',
    color: '#6100fd', // energy-medium
    backgroundColor: 'rgba(97, 0, 253, 0.1)',
  },
  {
    label: 'Creativity',
    value: 'creativity',
    color: '#0dc262', // energy-low
    backgroundColor: 'rgba(13, 194, 98, 0.1)',
  },
];

const chartData = computed<ChartData<'line'>>(() => {
  const data = patternsStore.currentData;
  const metric = metrics.find(metric => metric.value === patternsStore.selectedMetric)!;

  return {
    labels: data.map(d => ('time' in d ? d.time : 'day' in d ? d.day : d.week)),
    datasets: [
      {
        label: metric.label,
        borderColor: metric.color,
        data: data.map(d => d[patternsStore.selectedMetric]),
        tension: 0.4,
        fill: true,
        backgroundColor: metric.backgroundColor,
      },
    ],
  };
});

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-between flex-col gap-4 @min-[573px]:flex-row">
    <div class="flex gap-2 w-full @min-[573px]:w-auto bg-gray-medium/50 p-1.5">
      <Button
        v-for="range in timeRanges"
        :key="range.value"
        :variant="range.value === patternsStore.selectedRange ? 'primary' : 'link'"
        :class="[
          'w-full whitespace-nowrap',
          range.value === patternsStore.selectedRange ? 'bg-gray-darkest' : 'hover:bg-white/50',
        ]"
        @click="patternsStore.setTimeRange(range.value)"
      >
        {{ range.label }}
      </Button>
    </div>

    <Select
      v-model="patternsStore.selectedMetric"
      :options="metrics"
      class="w-full @min-[573px]:w-auto min-w-[300px]"
    />
  </div>

  <div class="h-80 relative">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
