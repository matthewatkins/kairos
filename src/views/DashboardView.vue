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
    <h1 class="dashboard-title">Kairos Dashboard</h1>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}

.dashboard-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
}
</style>
