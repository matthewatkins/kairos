import type { Component } from 'vue';

export type EnergyLevel = 'high' | 'medium' | 'low';

export interface EnergyStyle {
  icon: Component;
  color: string;
}

export interface EnergyInfo {
  level: EnergyLevel;
  label: string;
  message: string;
  description: string;
}

export interface EnergyState {
  currentTime: Date;
}
