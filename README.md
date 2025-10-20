# Joseph Henry Dunn II - Professional Portfolio & Business Tools

A comprehensive React-based professional portfolio and business management application built with TypeScript, Vite, and Tailwind CSS.

## Project Overview

This is a multifunctional professional suite combining a personal portfolio showcase with interactive business tools. The application demonstrates full-stack development capabilities while serving as both a working business tool suite and a portfolio of technical skills.

**Live Site**: Deployed via GitHub Pages
**Owner**: Joseph Henry Dunn II
**Status**: Production-ready with active development

---

## Situation Report (Updated: October 20, 2025)

### Current Status: 90-95% Complete - Production Ready

**Recent Development Focus:**
- Complete resume content overhaul with AI-augmented engineering focus
- Centralized data architecture - all resume content now sourced from resumeData.ts
- Added KEY ACHIEVEMENTS section highlighting top 5 career accomplishments
- Updated professional summary emphasizing 8x productivity gains through AI adoption
- Restructured technical skills into 6 categories (AI & Productivity Tools leading)
- Synchronized web view (Resume.tsx) and PDF export (PDFResume.tsx) to pull from single data source

**Latest Updates:**
- Refactored Resume.tsx to import all content from resumeData.ts (no more hardcoding)
- Added keyAchievements array with 5 major career highlights
- Updated all job experience bullets to emphasize AI leadership and innovation
- Reorganized skills categories to showcase AI-assisted workflows and tools
- Updated certifications section with clearer categorization
- Ensured PDF export fully reflects all resume data changes

### Core Features Implemented

#### 1. Professional Resume System
- **Static Resume Page** (`/resume`): Full professional resume display with PDF export
- **Resume Builder** (`/resume-builder`): Interactive CRUD tool for creating custom resumes
  - Personal info, work experience, education, skills, projects sections
  - Live preview panel
  - PDF export with auto-generated filenames
  - Sample data loader

#### 2. Cover Letter Builder (`/cover-letter-builder`)
- Comprehensive cover letter generation tool
- Structured forms: contact info, employer info, position details, letter content
- Skills and achievements tracking
- Live preview and PDF export

#### 3. Business Management Tools
- **CRM Dashboard** (`/crm`): Lead and contact management with key metrics
- **Analytics Dashboard** (`/analytics`): Performance metrics with date range filtering
- **Services Store** (`/store`): Professional IT services catalog with 6 offerings

#### 4. Portfolio & Home
- **Projects Portfolio** (`/projects`): Showcase of completed development work
- **Home Page** (`/`): Hero section, stats grid, featured modules, recent activity

### Technology Stack

**Frontend:**
- React 19.2.0 + TypeScript 5.9.3
- React Router v7 for navigation
- Tailwind CSS 3.4.17 for styling
- Vite (rolldown-vite) build tool

**Key Libraries:**
- jsPDF 3.0.3 + html2canvas 1.4.1 (PDF generation)
- react-pdf/renderer 4.3.1 (PDF components)
- react-icons 5.5.0 (UI icons)

**Development:**
- ESLint 9.36.0 with TypeScript support
- gh-pages 6.3.0 for deployment

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── Shell.tsx
│   ├── ResumePage/      # Resume display & PDF export
│   ├── ResumeBuilder/   # Interactive resume creator
│   ├── CoverLetterBuilder/  # Cover letter tool
│   └── ProductPage/     # Project cards
├── data/                # Static data & initial states
├── types/               # TypeScript interfaces
├── utils/               # PDF export & utilities
└── hooks/               # Custom React hooks
```

### Deployment & Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run deploy     # Deploy to GitHub Pages
npm run lint       # Run ESLint checks
```

**GitHub Pages Configuration:**
- Base path: `/joedunn123456789/`
- Automatic deployment via `gh-pages` package

### Technical Highlights

- Type-safe development with TypeScript strict mode
- Component-based modular architecture
- Mobile-responsive design with Tailwind CSS
- Clean separation of concerns (components, hooks, utils, types, data)
- Error handling in PDF exports
- Live preview functionality in builders

### Known Strengths

- Well-organized directory structure
- Comprehensive type definitions
- Reusable utility functions and components
- Consistent React patterns (hooks, modern practices)
- Professional UI/UX with attention to detail
- Active maintenance and iterative improvements

### Future Enhancement Opportunities

- Backend integration for data persistence (CRM, Analytics, Store)
- User authentication for personalized dashboards
- Database storage for created resumes/cover letters
- Email integration for document sending
- Payment processing for services store
- Full dark mode implementation across all pages

---

## Original Vite Template Information

This project was bootstrapped with a React + TypeScript + Vite template providing minimal setup with HMR and ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
