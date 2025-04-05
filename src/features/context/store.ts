import { defineStore } from 'pinia';
import type { Context } from '@/features/context/context';
import { contextLabels, contextValues, contextDescriptions } from '@/features/context/context';

interface ContextState {
  current: Context;
  date: Date;
  contexts: {
    work: {
      name: string;
      description: string;
    };
    personal: {
      name: string;
      description: string;
    };
  };
}

export const useContextStore = defineStore('context', {
  state: (): ContextState => ({
    current: contextValues.work,
    date: new Date(),
    contexts: {
      work: {
        name: contextLabels.work,
        description: contextDescriptions.work,
      },
      personal: {
        name: contextLabels.personal,
        description: contextDescriptions.personal,
      },
    },
  }),

  getters: {
    currentContext: state => state.contexts[state.current],
    isWork: state => state.current === contextValues.work,
    isPersonal: state => state.current === contextValues.personal,
  },

  actions: {
    setContext(context: Context) {
      this.current = context;
    },

    setDate(date: Date) {
      this.date = date;
    },

    checkAndUpdateContext() {
      const hour = new Date().getHours();
      const day = new Date().getDay();

      // After 6 PM, switch to personal context
      if (hour >= 18 && this.current === contextValues.work) {
        this.setContext(contextValues.personal);
      }
      // Between 9 AM and 6 PM on weekdays, switch to work context
      else if (
        hour >= 9 &&
        hour < 18 &&
        day !== 0 && // Not Sunday
        day !== 6 && // Not Saturday
        this.current === contextValues.personal
      ) {
        this.setContext(contextValues.work);
      }
    },
  },
});
