<script setup lang="ts">
import { computed } from 'vue';
import Button from '@/components/Button.vue';
import { useContextStore } from '@/stores/context';
import { Briefcase, Home } from 'lucide-vue-next';
import type { Context } from '@/stores/context';

const contextStore = useContextStore();
const contexts = computed(() => contextStore.contexts);

const icons = {
  personal: Home,
  work: Briefcase,
};
</script>

<template>
  <div class="flex gap-2">
    <Button
      v-for="context in contexts"
      :key="context.name"
      :variant="context.name.toLowerCase() === contextStore.current ? 'primary' : 'link'"
      @click="contextStore.setContext(context.name.toLowerCase() as Context)"
      class="w-full"
    >
      <component :is="icons[context.name.toLowerCase() as keyof typeof icons]" />
      {{ context.name }}
    </Button>
  </div>
</template>
