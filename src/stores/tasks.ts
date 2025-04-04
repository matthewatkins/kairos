import { defineStore } from 'pinia';
import type { Task } from '@/features/tasks/task';
import { useContextStore } from './context';
import { allTasks } from '@/features/tasks/mockTasks';

interface TasksState {
  tasks: Task[];
}

export const useTasksStore = defineStore('tasks', {
  state: (): TasksState => ({
    tasks: allTasks,
  }),

  getters: {
    currentTasks(): Task[] {
      const contextStore = useContextStore();
      const filtered = this.tasks.filter(task => task.context === contextStore.current);
      return filtered;
    },

    tasksByEnergy(): Record<string, Task[]> {
      return {
        high: this.currentTasks.filter(task => task.energyLevel === 'high'),
        medium: this.currentTasks.filter(task => task.energyLevel === 'medium'),
        low: this.currentTasks.filter(task => task.energyLevel === 'low'),
      };
    },

    tasksByCategory(): Record<string, Task[]> {
      const categories = new Set(this.currentTasks.map(task => task.category));
      const result: Record<string, Task[]> = {};

      categories.forEach(category => {
        result[category] = this.currentTasks.filter(task => task.category === category);
      });

      return result;
    },
  },

  actions: {
    toggleTaskCompletion(taskId: string) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },

    addTask(task: Omit<Task, 'id'>) {
      const newTask: Task = {
        ...task,
        id: crypto.randomUUID(),
      };

      this.tasks.push(newTask);
    },

    deleteTask(taskId: string) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    updateTask(taskId: string, updates: Partial<Omit<Task, 'id'>>) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        Object.assign(task, updates);
      }
    },
  },
});
