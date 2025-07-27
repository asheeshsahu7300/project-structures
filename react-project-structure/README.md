# ⚛️ React App with MobX-State-Tree

A scalable React project structured with modularity, maintainability, and performance in mind — using MobX-State-Tree for state management.

## 📁 Folder Overview

| Folder/File       | Purpose |
|-------------------|---------|
| `common/`         | Shared components/constants |
| `config/`         | Configuration (API base URLs, app constants) |
| `hocs/`           | Higher-order components (e.g., wrappers) |
| `hooks/`          | Custom React hooks (e.g., `useStores`) |
| `mst/`            | MobX-State-Tree models & stores |
| `router/`         | Route configuration |
| `screens/`        | Page-level components per route |
| `services/api/`   | Axios-based services or fetch clients |
| `theme/`          | Centralized theme definitions |
| `utils/`          | Reusable logic/utilities |
| `App.js`          | Main component tree |
| `index.js`        | React DOM bootstrapper |

## 🧠 State Management

- Powered by **MobX-State-Tree** (`mst/`)
- Use `React Context` to provide the `rootStore`
- Access via `useStores()` custom hook

## 🛠 Setup

```bash
npm install
npm start
