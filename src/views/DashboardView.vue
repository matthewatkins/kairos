<script setup lang="ts">
import { onMounted } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';

const dashboardStore = useDashboardStore();

onMounted(async () => {
  await dashboardStore.fetchDashboardData();
});
</script>

<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold">Kairos Dashboard</h1>
  </div>
</template>

<style scoped></style>
