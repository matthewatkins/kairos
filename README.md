# Kairos Timekeeper Dashboard

Kairos is an AI enhanced timekeeping application that differentiates itself by using energy levels as it's main mechanic as opposed to regular clock based time. In ancient Greek Kairos means 'the right or critical moment'. Therfore this app suggests the right task or activity at the right time for a users current energy.

This project is simply the **dashboard** part of what would be a larger application.

## Features

_All data is faked_

This dashboard includes:

- AI adapted context modes for showing appropriate tasks. These contexts are simplified down to "work" and "personal" modes.
- Context-Aware Time. Time display changes based on location, activity, and priorities. Shows current energy level with visual color indication.
  - In work context: shows project deadlines and meeting countdowns
  - In personal context: shows family events and personal goals
  - AI transitions between contexts automatically
- Suggested task list based on current energy level.
- Energy patterns
  - This includes a chart showing productivity cycles with day, week, and month views. These cycles are AI driven data assessed from actual patterns.
  - AI suggested times and scheduling based on user patterns and energy levels.
- Task list showing all current tasks based on the currenly assessed context. Includes the ability to quickly add new tasks to that context.

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Pinia for state management
- Vue Router for navigation
- Vite for build tooling
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v18.3 or higher for vue)
- npm (v7 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To view the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable Vue components - mostly global UI components
├── features/      # App features including related types, stores, components, etc...
├── router/        # App routes
├── stores/        # Global Pinia stores
├── styles/        # Global styles and Tailwind CSS config
├── views/         # Page components
```

## Development Guidelines

- Use TypeScript for all new files
- Follow Vue 3 Composition API patterns
- Use Pinia stores for state management
- Keep components focused and reusable
- Components that are specific to a feature should be
  included with the feature, not global components
- Use scoped styles for component-specific CSS
- Opt for Tailwind CSS over scoped styles
