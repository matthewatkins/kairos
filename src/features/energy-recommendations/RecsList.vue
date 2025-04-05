<script setup lang="ts">
import { useEnergyStore } from '@/features/energy/store';
import { SquarePlay } from 'lucide-vue-next';
import Button from '@/components/Button.vue';
import Panel from '@/components/Panel.vue';

const energyStore = useEnergyStore();
</script>

<template>
  <Panel>
    <div class="flex flex-col gap-6">
      <div class="flex items-start justify-between">
        <div>
          <h2 class="text-2xl font-bold">
            Current Energy:
            <span>{{ energyStore.energyInfo.label }}</span>
          </h2>
          <p class="mt-1 text-sm text-gray-dark">AI suggested tasks for your current level.</p>
        </div>
        <component
          :is="energyStore.energyStyle.icon"
          :color="energyStore.energyStyle.color"
          class="size-10"
        />
      </div>

      <p>{{ energyStore.energyInfo.description }}</p>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Recommended tasks to work on now:</h3>
        <div
          v-for="task in energyStore.recommendedTasks"
          :key="task.id"
          class="flex items-center justify-between border-2 border-gray-medium p-4"
        >
          <span>{{ task.title }}</span>
          <Button variant="link" :color="energyStore.energyInfo.level" :icon="SquarePlay">
            START
          </Button>
        </div>
      </div>
    </div>
  </Panel>
</template>
