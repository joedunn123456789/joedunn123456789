// src/data/projects.ts
export interface Project {
  title: string;
  repoUrl: string;
  liveUrl?: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Kanban Board",
    repoUrl: "https://github.com/josephdunn/kanban-board",
    liveUrl: "https://josephdunn.github.io/kanban-board",
    description: "Modular Angular Kanban board with mobile-first UX and Azure deployment."
  },
  {
    title: "React Portfolio",
    repoUrl: "https://github.com/josephdunn/react-portfolio",
    liveUrl: "https://josephdunn.github.io/react-portfolio",
    description: "Responsive portfolio built with React, Vite, and Tailwind CSS v3."
  }
];
