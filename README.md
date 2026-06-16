# UpTask — Task Management App

A task management application built with React that allows users to create, organize, and track their tasks efficiently.

## Tech Stack

- **React** — UI library
- **React Hook Form** — Form handling and validation
- **React Router DOM** — Client-side routing
- **React Toastify** — Toast notifications
- **TanStack Query** — Server state management and data fetching
- **Axios** — HTTP client for API requests

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/uptask-frontend.git
cd uptask-frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_API_URL=http://localhost:4000/api
```

## Usage

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Other available commands

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |

## Project Structure

```
uptask_frontend/
└── src/
    ├── config/         # Axios instance and global config
    ├── components/     # Reusable UI components
    ├── hooks/          # Custom React hooks
    ├── layouts/        # Page layout wrappers
    ├── pages/          # Route-level components
    ├── types/          # TypeScript type definitions
    └── main.tsx        # App entry point
```
