import { defineStore } from 'pinia';
import { useTasksStore } from '@/features/tasks/store';
import { Zap, Coffee, Brain } from 'lucide-vue-next';
import type { Task } from '@/features/tasks/types';
import type { EnergyLevel, EnergyStyle, EnergyInfo, EnergyState } from './types';

const energyStyles: Record<EnergyLevel, EnergyStyle> = {
  high: {
    icon: Zap,
    color: 'var(--color-energy-high)',
  },
  medium: {
    icon: Brain,
    color: 'var(--color-energy-medium)',
  },
  low: {
    icon: Coffee,
    color: 'var(--color-energy-low)',
  },
} as const;

export const useEnergyStore = defineStore('energy', {
  state: (): EnergyState => ({
    currentTime: new Date(),
  }),

  getters: {
    energyInfo(state): EnergyInfo {
      const hour = state.currentTime.getHours();

      if (hour >= 9 && hour < 12) {
        return {
          level: 'high',
          label: 'High',
          message: 'High energy - ideal for focused work',
          description:
            'You have high energy right now - perfect for challenging tasks that require focus and creativity.',
        };
      }

      if (hour >= 12 && hour < 14) {
        return {
          level: 'medium',
          label: 'Medium',
          message: 'Medium energy - good for meetings',
          description: 'Your energy is balanced - great for collaborative work and meetings.',
        };
      }

      if (hour >= 14 && hour < 16) {
        return {
          level: 'low',
          label: 'Low',
          message: 'Lower energy - take breaks',
          description:
            'Energy is lower during this time - focus on lighter tasks and take regular breaks.',
        };
      }

      if (hour >= 16 && hour < 19) {
        return {
          level: 'medium',
          label: 'Medium',
          message: 'Rising energy - good for creative tasks',
          description:
            "You're getting a second wind - perfect time for creative work and brainstorming.",
        };
      }

      return {
        level: 'low',
        label: 'Low',
        message: 'Rest and recovery time',
        description: 'Time to wind down and prepare for tomorrow.',
      };
    },

    energyStyle(): EnergyStyle {
      return energyStyles[this.energyInfo.level];
    },

    recommendedTasks(): Task[] {
      const tasksStore = useTasksStore();
      return tasksStore.currentTasks.filter(task => task.energyLevel === this.energyInfo.level);
    },
  },

  actions: {
    updateCurrentTime() {
      this.currentTime = new Date();
    },

    startTimeTracking() {
      setInterval(() => {
        this.updateCurrentTime();
      }, 60000); // Update every minute
    },
  },
});

// Type for the store
export type EnergyStore = ReturnType<typeof useEnergyStore>;
