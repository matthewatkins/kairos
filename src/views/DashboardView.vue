<script setup lang="ts">
import ContextSwitcher from '@/features/context/ContextSwitcher.vue';
import TaskList from '@/features/tasks/TasksList.vue';
import ContextClock from '@/features/context-clock/Clock.vue';
import RecsList from '@/features/energy/RecsList.vue';
import Patterns from '@/features/patterns/Patterns.vue';
import { useContextStore } from '@/features/context/store';
import { useEnergyStore } from '@/features/energy/store';

const contextStore = useContextStore();
const energyStore = useEnergyStore();

const colorVariants = {
  high: 'text-energy-high',
  medium: 'text-energy-medium',
  low: 'text-energy-low',
  default: 'text-white',
} as const;
</script>

<template>
  <main class="dashboard mx-auto max-w-screen-2xl px-4 py-8">
    <header class="header">
      <div class="brand text-3xl font-bold">
        K<span :class="colorVariants[energyStore.energyInfo.level]">ai</span>ros
      </div>

      <ContextSwitcher class="context" />
    </header>

    <div class="heading flex flex-col justify-end">
      <h1 class="text-xl font-bold">Energy Dashboard</h1>
      <p class="text-sm text-gray-dark">Your productivity patterns and optimal schedule</p>
    </div>

    <ContextClock class="clock" />

    <Patterns class="patterns" />

    <RecsList class="recs" />

    <TaskList class="tasks" />

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
  padding-bottom: 150px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: var(--columns);
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
