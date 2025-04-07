<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';

type Option = {
  label: string;
  value: string;
};

defineProps<{
  options: Option[];
}>();

const modelValue = defineModel<string>({ required: true });
</script>

<template>
  <div class="select relative">
    <select
      v-model="modelValue"
      class="appearance-none w-full font-medium text-sm bg-white border-2 border-gray-medium px-3 py-2 pl-3 pr-8"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <ChevronDown
      class="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-dark pointer-events-none"
    />
  </div>
</template>
