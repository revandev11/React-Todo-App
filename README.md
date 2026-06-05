# Lab 7.09 — React Todo App

This is a Next.js app implementing the multi-component Todo application from the lab.

Quick start:

```bash
# install dependencies
npm install

# run dev server
npm run dev

# open http://localhost:3000
```

Git submission:

```bash
git init
git add .
git commit -m "Complete Lab 7.09: React Todo App"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

Files of interest:
- `app/page.jsx` — main stateful component (uses `useState`)
- `components/TodoForm.jsx` — controlled input + add handler
- `components/TodoList.jsx` — renders list
- `components/TodoItem.jsx` — checkbox + delete
- `components/TodoFilter.jsx` — filter buttons
- `components/TodoStats.jsx` — derived counts
