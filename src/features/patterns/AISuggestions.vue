<script setup lang="ts">
import EnergyBadge from '@/features/tasks/EnergyBadge.vue';
import Button from '@/components/Button.vue';
import { Clock, CalendarPlus2 } from 'lucide-vue-next';
import { usePatternsStore } from './store';

const patternsStore = usePatternsStore();

const variants = {
  high: 'border-energy-high text-energy-high',
  medium: 'border-energy-medium text-energy-medium',
  low: 'border-energy-low text-energy-low',
};
</script>

<template>
  <header>
    <h3 class="font-bold text-lg">AI Suggestions</h3>
    <p class="text-sm text-gray-dark mb-4">
      Based on your energy patterns, here are optimal times for different activities:
    </p>
  </header>

  <div class="grid gap-4 md:grid-cols-3">
    <div
      v-for="(suggestions, level) in patternsStore.suggestions"
      :key="level"
      class="border-2 p-4"
      :class="variants[level as keyof typeof variants]"
    >
      <div class="flex items-center gap-2 mb-2">
        <EnergyBadge :level="level" />
      </div>

      <div v-for="(suggestion, index) in suggestions" :key="suggestion.title">
        <h4 class="font-medium">{{ suggestion.title }}</h4>

        <div class="flex items-center gap-1 text-sm text-gray-dark mb-3">
          <Clock class="w-4 h-4" />
          <span class="font-medium">{{ suggestion.time }}</span>
        </div>
        <p class="text-sm text-gray-dark mb-4">{{ suggestion.description }}</p>

        <Button variant="outline" :icon="CalendarPlus2" class="w-full">Add to schedule</Button>

        <hr v-if="index < suggestions.length - 1" class="my-6 border-gray-medium" />
      </div>
    </div>
  </div>
</template>
