import { defineStore } from 'pinia';

interface DashboardData {}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardData => ({}),

  actions: {
    async fetchDashboardData() {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock data
      // this.metrics = {
      //   totalEnergy: 2500,
      //   efficiency: 85,
      //   savings: 450
      // }

      // this.recentActivity = []
    },
  },
});
