<script setup lang="ts">
import { ref } from 'vue';
import { SquarePlus } from 'lucide-vue-next';
import Button from '@/components/Button.vue';

const emit = defineEmits<{
  (e: 'add', title: string): void;
}>();

const title = ref('');

function handleSubmit() {
  if (title.value.trim()) {
    emit('add', title.value.trim());
    title.value = '';
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2">
    <input
      v-model="title"
      type="text"
      placeholder="Add a new task or activity"
      class="flex-1 border-2 border-gray-dark bg-white px-4 py-2 text-sm placeholder:text-gray-dark/50 focus:outline-none focus:ring-1"
    />
    <Button variant="primary" :icon="SquarePlus"> ADD </Button>
  </form>
</template>
