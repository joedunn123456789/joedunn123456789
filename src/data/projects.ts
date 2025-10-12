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
    repoUrl: "https://github.com/joedunn123456789/angular-kanban-board",
    liveUrl: "https://joedunn123456789.github.io/angular-kanban-board/",
    description: "Modular Angular Kanban board with mobile-first UX"
  },
  {
    title: "CRM Dashboard",
    repoUrl: "https://github.com/joedunn123456789/angular-project-1",
    liveUrl: "https://joedunn123456789.github.io/angular-project-1/",
    description: "Modular Angular CRM Dashboard with mobile-first UX"
  },
  {
    title: "React Markdown Previewer",
    repoUrl: "https://github.com/joedunn123456789/react-markdown-previewer",
    liveUrl: "https://joedunn123456789.github.io/react-markdown-previewer/",
    description: "Responsive markdown preview built with React, Vite, and Tailwind CSS v3."
  }
];
