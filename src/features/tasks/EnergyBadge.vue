<script setup lang="ts">
import { Coffee, Brain, Zap } from 'lucide-vue-next';
import type { EnergyLevel } from '@/features/energy/types';

type Props = {
  level: EnergyLevel;
};

const props = defineProps<Props>();

const variants = {
  high: {
    classes: 'bg-energy-high/10 text-energy-high border-energy-high',
    icon: Zap,
    label: 'High',
  },
  medium: {
    classes: 'bg-energy-medium/10 text-energy-medium border-energy-medium',
    icon: Brain,
    label: 'Medium',
  },
  low: {
    classes: 'bg-energy-low/10 text-energy-low border-energy-low',
    icon: Coffee,
    label: 'Low',
  },
};
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border-1 px-2.5 py-0.5 text-xs font-medium"
    :class="variants[props.level].classes"
  >
    <component :is="variants[props.level].icon" class="h-3.5 w-3.5" />
    {{ variants[props.level].label }}
  </span>
</template>
