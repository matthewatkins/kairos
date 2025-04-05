<script setup lang="ts">
import { computed } from 'vue';
import { useContextStore } from '@/features/context/store';
import { Briefcase, Home } from 'lucide-vue-next';
import { contextValues } from '@/features/context/context';
import type { Context } from '@/features/context/context';
import Button from '@/components/Button.vue';
import Panel from '@/components/Panel.vue';

const contextStore = useContextStore();
const contexts = computed(() => contextStore.contexts);

const icons = {
  [contextValues.personal]: Home,
  [contextValues.work]: Briefcase,
};
</script>

<template>
  <Panel class="flex gap-2">
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
  </Panel>
</template>
