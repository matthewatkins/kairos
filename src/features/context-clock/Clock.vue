<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useContextStore } from '@/features/context/store';
import { contextValues } from '@/features/context/context';
import { Clock } from 'lucide-vue-next';
import Panel from '@/components/Panel.vue';

const contextStore = useContextStore();
const now = ref(new Date());
let timer: number;

// Update time every second
onMounted(() => {
  timer = window.setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const formattedTime = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(now.value);
});

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(now.value);
});

const timeUntilEndOfWork = computed(() => {
  if (contextStore.current !== contextValues.work) return null;

  const endOfDay = new Date(now.value);
  endOfDay.setHours(17, 0, 0, 0); // 5:00 PM

  if (now.value >= endOfDay) return null;

  const diff = endOfDay.getTime() - now.value.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes };
});

interface EnergyInfo {
  level: 'energy-high' | 'energy-medium' | 'energy-low';
  message: string;
}

const energyInfo = computed<EnergyInfo>(() => {
  const hour = now.value.getHours();

  if (hour >= 9 && hour < 12) {
    return {
      level: 'energy-high',
      message: 'High energy - ideal for focused work',
    };
  } else if (hour >= 12 && hour < 14) {
    return {
      level: 'energy-medium',
      message: 'Medium energy - good for meetings',
    };
  } else if (hour >= 14 && hour < 16) {
    return {
      level: 'energy-low',
      message: 'Lower energy - take breaks',
    };
  } else if (hour >= 16 && hour < 19) {
    return {
      level: 'energy-medium',
      message: 'Rising energy - good for creative tasks',
    };
  } else {
    return {
      level: 'energy-low',
      message: 'Rest and recovery time',
    };
  }
});

const currentEnergyLevel = computed(() => energyInfo.value.level);
</script>

<template>
  <Panel :color="currentEnergyLevel" class="p-6 @container">
    <div
      class="flex items-center justify-center @max-[385px]:justify-start gap-6 text-4xl font-bold"
      :class="{
        'text-white': currentEnergyLevel === 'energy-low' || currentEnergyLevel === 'energy-medium',
        'text-black': currentEnergyLevel === 'energy-high',
      }"
    >
      <Clock class="size-12 self-start" />

      <div class="flex flex-col">
        {{ formattedTime }}

        <span v-if="contextStore.current === contextValues.personal" class="mt-1 text-sm">
          {{ formattedDate }}
        </span>
        <span v-if="timeUntilEndOfWork" class="mt-1 text-sm">
          {{ timeUntilEndOfWork.hours }}h {{ timeUntilEndOfWork.minutes }}m until end of work day
        </span>

        <div class="text-lg">{{ energyInfo.message }}</div>
      </div>
    </div>
  </Panel>
</template>
