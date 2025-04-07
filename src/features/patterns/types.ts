export type TimeRange = 'day' | 'week' | 'month';
export type MetricType = 'energy' | 'focus' | 'creativity';

interface BasePatternData {
  energy: number;
  focus: number;
  creativity: number;
}

export interface DayPatternData extends BasePatternData {
  time: string;
}

export interface WeekPatternData extends BasePatternData {
  day: string;
}

export interface MonthPatternData extends BasePatternData {
  week: string;
}

export type PatternData = DayPatternData | WeekPatternData | MonthPatternData;
