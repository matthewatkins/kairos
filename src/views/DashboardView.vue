<script setup lang="ts">
import { onMounted } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
import Panel from '@/components/Panel.vue';
import ContextSwitcher from '@/features/context/ContextSwitcher.vue';

const dashboardStore = useDashboardStore();

onMounted(async () => {
  await dashboardStore.fetchDashboardData();
});
</script>

<template>
  <main class="dashboard mx-auto max-w-screen-2xl px-4 py-8">
    <header class="header">
      <div class="brand flex items-center gap-2 text-2xl font-bold">Kairos</div>

      <Panel class="context">
        <ContextSwitcher />
      </Panel>
    </header>

    <div class="heading">
      <h1 class="text-xl font-bold">Energy Dashboard</h1>
      <p class="text-sm text-gray-dark">Your productivity patterns and optimal schedule</p>
    </div>

    <Panel class="clock" color="energy-high">
      <h2 class="text-xl font-bold">Clock</h2>
    </Panel>

    <Panel class="patterns">
      <h2 class="text-xl font-bold">Patterns</h2>
    </Panel>

    <Panel class="recs">
      <h2 class="text-xl font-bold">Recs</h2>
    </Panel>

    <Panel class="tasks">
      <h2 class="text-xl font-bold">Tasks</h2>
    </Panel>

    <div class="footer p-4 text-sm text-gray-500 text-center">
      <p>&copy; {{ new Date().getFullYear() }} Kairos AI Corporation - All Rights Reserved</p>
      <p>Made with ❤️ &amp; 🤖 in Champaign, IL</p>
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  --columns: 1fr 385px;

  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  padding-top: 100px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: var(--columns);
    grid-template-rows: 0.3fr 0.5fr 1fr 1fr 0.5fr;
    grid-auto-rows: 1fr;
    grid-auto-flow: column;
    grid-template-areas:
      'header header'
      'heading clock'
      'patterns recs'
      'tasks tasks'
      'footer footer';
    padding-top: 20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    grid-area: header;
    display: grid;
    grid-template-columns: var(--columns);
    grid-template-rows: 1fr;
    gap: 0px 20px;
    grid-template-areas: 'brand context';
  }
}

.heading {
  grid-area: heading;
}

.brand {
  grid-area: brand;
}

.context {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 900px) {
    grid-area: context;
    position: relative;
    width: 385px;
  }
}

.patterns {
  grid-area: patterns;
}

.clock {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (min-width: 900px) {
    grid-area: clock;
    position: relative;
  }
}

.footer {
  grid-area: footer;
}

.tasks {
  grid-area: tasks;
}

.recs {
  grid-area: recs;
}
</style>
