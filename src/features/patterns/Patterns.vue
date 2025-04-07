<script setup lang="ts">
import Panel from '@/components/Panel.vue';
import Chart from './Chart.vue';
import AISuggestions from './AISuggestions.vue';
</script>

<template>
  <Panel class="flex flex-col gap-6 @container">
    <header>
      <h2 class="text-2xl font-bold">Energy Patterns</h2>
      <p class="text-sm text-gray-dark">Your productivity cycles through the day</p>
    </header>

    <Chart />
    <AISuggestions />
  </Panel>
</template>
