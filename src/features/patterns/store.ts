import { defineStore } from 'pinia';
import { useContextStore } from '@/features/context/store';
import { contextValues } from '@/features/context/context';
import type {
  TimeRange,
  MetricType,
  DayPatternData,
  WeekPatternData,
  MonthPatternData,
} from './types';

interface Suggestion {
  title: string;
  time: string;
  description: string;
}

interface PatternsState {
  selectedRange: TimeRange;
  selectedMetric: MetricType;
  dayData: DayPatternData[];
  weekData: WeekPatternData[];
  monthData: MonthPatternData[];
}

// NOTE: This data is fake, but would come from AI analysis of actual user data
export const usePatternsStore = defineStore('patterns', {
  state: (): PatternsState => ({
    selectedRange: 'day',
    selectedMetric: 'energy',
    dayData: [
      { time: '6 AM', energy: 40, focus: 30, creativity: 20 },
      { time: '8 AM', energy: 60, focus: 50, creativity: 30 },
      { time: '10 AM', energy: 80, focus: 90, creativity: 40 },
      { time: '12 PM', energy: 70, focus: 75, creativity: 50 },
      { time: '2 PM', energy: 50, focus: 40, creativity: 70 },
      { time: '4 PM', energy: 60, focus: 65, creativity: 80 },
      { time: '6 PM', energy: 50, focus: 55, creativity: 60 },
      { time: '8 PM', energy: 30, focus: 25, creativity: 40 },
      { time: '10 PM', energy: 20, focus: 15, creativity: 30 },
    ],
    weekData: [
      { day: 'Mon', energy: 70, focus: 75, creativity: 50 },
      { day: 'Tue', energy: 80, focus: 85, creativity: 60 },
      { day: 'Wed', energy: 65, focus: 70, creativity: 75 },
      { day: 'Thu', energy: 60, focus: 55, creativity: 80 },
      { day: 'Fri', energy: 50, focus: 45, creativity: 70 },
      { day: 'Sat', energy: 40, focus: 35, creativity: 60 },
      { day: 'Sun', energy: 60, focus: 50, creativity: 40 },
    ],
    monthData: [
      { week: 'Week 1', energy: 65, focus: 70, creativity: 60 },
      { week: 'Week 2', energy: 70, focus: 75, creativity: 65 },
      { week: 'Week 3', energy: 60, focus: 65, creativity: 75 },
      { week: 'Week 4', energy: 55, focus: 60, creativity: 70 },
    ],
  }),

  getters: {
    currentData(state): DayPatternData[] | WeekPatternData[] | MonthPatternData[] {
      switch (state.selectedRange) {
        case 'day':
          return state.dayData;
        case 'week':
          return state.weekData;
        case 'month':
          return state.monthData;
      }
    },

    suggestions(): Record<string, Suggestion[]> {
      const contextStore = useContextStore();
      const isWork = contextStore.current === contextValues.work;

      const workSuggestions = {
        high: [
          {
            title: 'Deep work session',
            time: '9:30 AM - 11:30 AM',
            description: 'Your focus peaks in the morning',
          },
          {
            title: 'Important meetings',
            time: '10:00 AM - 12:00 PM',
            description: 'High energy for critical discussions',
          },
        ],
        medium: [
          {
            title: 'Team meetings',
            time: '1:00 PM - 2:30 PM',
            description: 'Good energy for collaboration after lunch',
          },
          {
            title: 'Planning sessions',
            time: '3:00 PM - 4:00 PM',
            description: 'Balanced energy for strategic work',
          },
        ],
        low: [
          {
            title: 'Email and admin tasks',
            time: '4:00 PM - 5:00 PM',
            description: 'Lower cognitive demand when energy dips',
          },
          {
            title: 'Documentation',
            time: '4:30 PM - 5:30 PM',
            description: 'Good time for light work',
          },
        ],
      };

      const personalSuggestions = {
        high: [
          {
            title: 'Morning workout',
            time: '7:00 AM - 8:00 AM',
            description: 'Peak physical energy for exercise',
          },
          {
            title: 'Creative projects',
            time: '10:00 AM - 11:30 AM',
            description: 'Fresh mind for personal projects',
          },
        ],
        medium: [
          {
            title: 'Social activities',
            time: '2:00 PM - 4:00 PM',
            description: 'Good time for meeting friends',
          },
          {
            title: 'Light hobbies',
            time: '4:00 PM - 5:30 PM',
            description: 'Relaxed energy for enjoyable activities',
          },
        ],
        low: [
          {
            title: 'Reading & relaxation',
            time: '7:00 PM - 8:30 PM',
            description: 'Wind down with calm activities',
          },
          {
            title: 'Meditation',
            time: '9:00 PM - 9:30 PM',
            description: 'Perfect for mindfulness practice',
          },
        ],
      };

      return isWork ? workSuggestions : personalSuggestions;
    },
  },

  actions: {
    setTimeRange(range: TimeRange) {
      this.selectedRange = range;
    },

    setMetric(metric: MetricType) {
      this.selectedMetric = metric;
    },
  },
});
