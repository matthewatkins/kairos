# Kairos Timekeeper Dashboard

Kairos is an AI enhanced timekeeping application that differentiates itself by using energy levels as it's main mechanic.

## Features

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Pinia for state management
- Vue Router for navigation
- Vite for build tooling
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
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

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── views/         # Page components
├── stores/        # Pinia stores
├── assets/        # Static assets
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Development Guidelines

- Use TypeScript for all new files
- Follow Vue 3 Composition API patterns
- Use Pinia stores for state management
- Keep components focused and reusable
- Use scoped styles for component-specific CSS
