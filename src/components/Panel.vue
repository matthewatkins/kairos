<script setup lang="ts">
import type { EnergyLevel } from '@/features/energy/types';

type Props = {
  color?: EnergyLevel | 'default';
};

const { color = 'default' } = defineProps<Props>();

const variants = {
  high: 'bg-energy-high',
  medium: 'bg-energy-medium',
  low: 'bg-energy-low',
  default: 'bg-white',
} as const;
</script>

<template>
  <section class="panel p-4 shadow-sm" :class="variants[color]">
    <slot />
  </section>
</template>
