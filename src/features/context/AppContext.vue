<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useContextStore } from '@/features/context/store';

const contextStore = useContextStore();

let interval: number;

onMounted(() => {
  // Check context every 10 seconds
  interval = window.setInterval(() => {
    contextStore.checkAndUpdateContext();
  }, 10000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <slot />
</template>
