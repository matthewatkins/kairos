<script setup lang="ts">
import { Clock } from 'lucide-vue-next';
import Badge from '@/features/tasks/EnergyBadge.vue';
import type { Task } from './types';

type Props = {
  task: Task;
};

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-4 border-2 border-gray-medium p-4">
    <input
      type="checkbox"
      :checked="task.completed"
      class="h-4 w-4 rounded border-gray-medium text-energy-medium focus:ring-energy-medium"
    />

    <div class="flex flex-1 items-center justify-between">
      <span class="text-sm font-medium" :class="{ 'line-through': task.completed }">
        {{ task.title }}
      </span>

      <div class="flex items-center gap-4">
        <div v-if="task.optimalTime" class="flex items-center gap-1 text-sm text-gray-dark">
          <Clock class="h-4 w-4" />
          {{ task.optimalTime }}
        </div>
        <Badge :level="task.energyLevel" />
      </div>
    </div>
  </div>
</template>
