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
    repoUrl: "https://github.com/joevisualstoryteller/EmailToSheet",
    description: "Python and Google Apps Script tools to export emails from Gmail and Outlook to Excel/Google Sheets using OAuth2 authentication"
  },
  {
    title: "Kanban Board",
    repoUrl: "https://github.com/joevisualstoryteller/angular-kanban-board",
    liveUrl: "https://joevisualstoryteller.github.io/angular-kanban-board/",
    description: "Modular Angular Kanban board with mobile-first UX"
  },
  {
    title: "CRM Dashboard",
    repoUrl: "https://github.com/joevisualstoryteller/angular-project-1",
    liveUrl: "https://joevisualstoryteller.github.io/angular-project-1/",
    description: "Modular Angular CRM Dashboard with mobile-first UX"
  },
  {
    title: "My Resume In CSS3",
    repoUrl: "https://github.com/joevisualstoryteller/CSS-Resume",
    liveUrl: "https://joevisualstoryteller.github.io/CSS-Resume/",
    description: "Modular Resume built in CSS3"
  },
  {
    title: "My Resume In Bootstrap5",
    repoUrl: "https://github.com/joevisualstoryteller/Bootstrap5-Resume",
    liveUrl: "https://joevisualstoryteller.github.io/Bootstrap5-Resume/",
    description: "Modular Resume built in Bootstrap5"
  },
  {
    title: "Mobile-First Resume in Tailwind CSS",
    repoUrl: "https://github.com/joevisualstoryteller/tailwindcss-mobile-resume",
    liveUrl: "https://joevisualstoryteller.github.io/tailwindcss-mobile-resume/",
    description: "Modern, responsive resume built with Tailwind CSS v3, optimized for mobile-first user experience"
  },
  {
    title: "React Markdown Previewer",
    repoUrl: "https://github.com/joevisualstoryteller/react-markdown-previewer",
    liveUrl: "https://joevisualstoryteller.github.io/react-markdown-previewer/",
    description: "Responsive markdown preview built with React, Vite, and Tailwind CSS v3."
  },
  {
    title: "Custom LLM",
    repoUrl: "https://github.com/joevisualstoryteller/myFirstLLM",
    description: "Educational project demonstrating the fundamentals of building a Large Language Model from scratch"
  }
];
