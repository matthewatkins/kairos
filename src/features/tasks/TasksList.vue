<script setup lang="ts">
import { computed } from 'vue';
import { useTasksStore } from '@/features/tasks/store';
import { useContextStore } from '@/features/context/store';
import TaskInput from './TaskInput.vue';
import TaskItem from './TaskItem.vue';
import Panel from '@/components/Panel.vue';

const tasksStore = useTasksStore();
const contextStore = useContextStore();

const currentContextLabel = computed(() => {
  return contextStore.currentContext.name;
});

function handleAddTask(title: string) {
  tasksStore.addTask({
    title,
    completed: false,
    energyLevel: 'medium', // Default to medium energy
    category: contextStore.current === 'work' ? 'Admin' : 'Personal',
    estimatedDuration: '30 min', // Default duration
    context: contextStore.current,
  });
}
</script>

<template>
  <Panel class="flex flex-col gap-6">
    <div>
      <h2 class="text-2xl font-bold">{{ currentContextLabel }} Tasks</h2>
      <p class="text-sm text-gray-dark">
        All of your {{ currentContextLabel }} tasks and activities
      </p>
    </div>

    <TaskInput @add="handleAddTask" />

    <hr class="border border-gray-medium" />

    <div class="flex flex-col gap-2">
      <TaskItem
        v-for="task in tasksStore.currentTasks"
        :key="task.id"
        :task="task"
        @toggle="tasksStore.toggleTaskCompletion(task.id)"
      />
    </div>
  </Panel>
</template>
