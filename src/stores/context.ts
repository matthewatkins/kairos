import { defineStore } from 'pinia';

export type Context = 'work' | 'personal';

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
    current: 'work',
    date: new Date(),
    contexts: {
      work: {
        name: 'Work',
        description: 'Professional tasks and work-related activities',
      },
      personal: {
        name: 'Personal',
        description: 'Personal life and non-work activities',
      },
    },
  }),

  getters: {
    currentContext: state => state.contexts[state.current],
    isWork: state => state.current === 'work',
    isPersonal: state => state.current === 'personal',
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
      if (hour >= 18 && this.current === 'work') {
        this.setContext('personal');
      }
      // Between 9 AM and 6 PM on weekdays, switch to work context
      else if (
        hour >= 9 &&
        hour < 18 &&
        day !== 0 && // Not Sunday
        day !== 6 && // Not Saturday
        this.current === 'personal'
      ) {
        this.setContext('work');
      }
    },
  },
});
