import type { EnergyLevel } from '@/features/energy/types';
import type { Context } from '@/features/context/context';

export type WorkCategory = 'Deep work' | 'Collaboration' | 'Admin' | 'Creative';
export type PersonalCategory =
  | 'Health'
  | 'Leisure'
  | 'Social'
  | 'Wellness'
  | 'Learning'
  | 'Home'
  | 'Personal';
export type TaskCategory = WorkCategory | PersonalCategory;

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  energyLevel: EnergyLevel;
  context: Context;
  optimalTime?: string;
  category: TaskCategory;
  estimatedDuration: string;
}
