<script setup lang="ts">
type Props = {
  color?: 'energy-high' | 'energy-medium' | 'energy-low' | 'default';
};

const { color = 'default' } = defineProps<Props>();

const variants = {
  'energy-high': 'bg-energy-high',
  'energy-medium': 'bg-energy-medium',
  'energy-low': 'bg-energy-low',
  default: 'bg-white',
};
</script>

<template>
  <section class="panel p-4 shadow-sm" :class="variants[color]">
    <slot />
  </section>
</template>
