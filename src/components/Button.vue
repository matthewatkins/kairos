<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';

type Props = {
  variant?: 'primary' | 'outline' | 'link';
  color?: 'default' | 'energy-high' | 'energy-medium' | 'energy-low';
  icon?: Component;
};

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variants = {
    primary: {
      default: 'bg-gray-dark text-white hover:bg-gray-darkest/90',
      'energy-high': 'bg-energy-high text-white hover:bg-energy-high/90',
      'energy-medium': 'bg-energy-medium text-white hover:bg-energy-medium/90',
      'energy-low': 'bg-energy-low text-white hover:bg-energy-low/90',
    },
    outline: {
      default: 'border border-gray-medium bg-transparent text-gray-dark hover:bg-gray-light',
      'energy-high':
        'border border-energy-high bg-transparent text-energy-high hover:bg-energy-high/10',
      'energy-medium':
        'border border-energy-medium bg-transparent text-energy-medium hover:bg-energy-medium/10',
      'energy-low':
        'border border-energy-low bg-transparent text-energy-low hover:bg-energy-low/10',
    },
    link: {
      default:
        'bg-transparent text-gray-dark border-2 border-transparent hover:border-gray-dark hover:text-gray-darkest',
      'energy-high':
        'bg-transparent text-energy-high border-2 border-transparent hover:border-energy-high hover:text-energy-high/80',
      'energy-medium':
        'bg-transparent text-energy-medium border-2 border-transparent hover:border-energy-medium hover:text-energy-medium/80',
      'energy-low':
        'bg-transparent text-energy-low border-2 border-transparent hover:border-energy-low hover:text-energy-low/80',
    },
  };

  return `${base} ${variants[props.variant || 'primary'][props.color || 'default']}`;
});
</script>

<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <component v-if="icon" :is="icon" class="h-4 w-4" />
    <slot />
  </button>
</template>
