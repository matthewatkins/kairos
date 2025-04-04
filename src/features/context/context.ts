export type Context = 'work' | 'personal';

export const contextLabels: Record<Context, string> = {
  work: 'Work',
  personal: 'Personal',
};

export const contextValues: Record<Context, Context> = {
  work: 'work',
  personal: 'personal',
};

export const contextDescriptions: Record<Context, string> = {
  work: 'Work-related tasks and activities',
  personal: 'Personal tasks and activities',
};
