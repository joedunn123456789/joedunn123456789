// src/data/projects.ts
export interface Project {
  title: string;
  repoUrl: string;
  liveUrl?: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Email to Excel/Sheets Exporter",
    repoUrl: "https://github.com/joedunn123456789/EmailToSheet",
    description: "Python and Google Apps Script tools to export emails from Gmail and Outlook to Excel/Google Sheets using OAuth2 authentication"
  },
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
    title: "My Resume In CSS3",
    repoUrl: "https://github.com/joedunn123456789/CSS-Resume",
    liveUrl: "https://joedunn123456789.github.io/CSS-Resume/",
    description: "Modular Resume built in CSS3"
  },
  {
    title: "My Resume In Bootstrap5",
    repoUrl: "https://github.com/joedunn123456789/Bootstrap5-Resume",
    liveUrl: "https://joedunn123456789.github.io/Bootstrap5-Resume/",
    description: "Modular Resume built in Bootstrap5"
  },
  {
    title: "My Resume In Bootstrap5",
    repoUrl: "https://github.com/joedunn123456789/tailwindcss-mobile-resume",
    liveUrl: "https://joedunn123456789.github.io/tailwindcss-mobile-resume/",
    description: "Modular Resume, Tailwinds V3 CSS Mobile First UX"
  },
  {
    title: "React Markdown Previewer",
    repoUrl: "https://github.com/joedunn123456789/react-markdown-previewer",
    liveUrl: "https://joedunn123456789.github.io/react-markdown-previewer/",
    description: "Responsive markdown preview built with React, Vite, and Tailwind CSS v3."
  }
];
