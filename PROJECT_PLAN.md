# Project Plan – Joe Visual Storyteller

## Overview
Joe Visual Storyteller is a React/Vite single-page application that showcases Joseph Dunn’s professional profile, résumé/cover letter builder tools, knowledge base, CRM/analytics dashboards, and a services store. The current codebase ships, but much of the interactive surface is static, linting fails, and some build warnings persist. This plan prioritizes the work needed to make the experience production ready, maintainable, and extensible.

## Objectives
- **Stabilize the codebase** by eliminating lint errors, tightening TypeScript typing, and resolving build warnings.
- **Deliver functional tooling** so the résumé and cover letter builders feel reliable (autosave, PDF export, validation).
- **Add meaningful interactivity** to the knowledge base, CRM/analytics, and store modules so they reflect real data/state.
- **Improve UX polish** (dark mode, 404 handling, navigation clarity, performance budgets) to strengthen the portfolio narrative.

## Workstreams & Key Tasks
| Workstream | Desired Outcome | Key Tasks | Priority |
| --- | --- | --- | --- |
| **Platform Reliability** | Clean builds and linting, predictable deployments | - Remove `any` usages & fix ESLint violations<br>- Resolve Lightning CSS `@theme` warning (upgrade to Tailwind v4 or use config-based theme)<br>- Automate `npm run lint && npm run build` in CI<br>- Document local setup/troubleshooting | P0 |
| **Résumé & Cover Letter Tools** | Authoring tools that feel production-ready | - Add autosave/load (localStorage) for builder forms<br>- Improve PDF export reliability & progress feedback<br>- Add form validation & section completion indicators<br>- Allow multiple résumé templates / styling options | P0 |
| **Knowledge Base** | Discoverable technical articles with real filtering | - Implement client-side search (title, description, tags)<br>- Add category/tag filters tied to state<br>- Persist filter/search params in the URL<br>- Add pagination or lazy loading as content grows | P1 |
| **Store & Commerce** | Credible services catalog with cart interactions | - Wire category buttons to filter products<br>- Implement mock cart state (add/remove, total)<br>- Add “Purchase” CTA that opens contact modal or external form<br>- Surface testimonials or trust indicators | P1 |
| **CRM & Analytics Dashboards** | Interactive, data-driven dashboards | - Extract sample data into JSON + hooks<br>- Add sorting/filtering on leads, contacts, opportunities<br>- Replace static emoji charts with minimal chart lib or SVG spark-lines<br>- Enable export buttons (download CSV/PDF) | P2 |
| **UX & Site Experience** | Cohesive, polished site | - Integrate Dark Mode toggle into header & persist choice<br>- Add 404 / catch-all route with navigation back home<br>- Add loading states to lazy routes & iframe fallbacks<br>- Optimize bundle chunks (analyze `pdf-vendor` size) | P2 |

## Milestones & Timeline
| Milestone | Scope | Target |
| --- | --- | --- |
| **M1 – Code Health** | Resolve lint errors, fix Tailwind warning, add CI workflow | Week 1 |
| **M2 – Tools Polish** | Resume/Cover builders: autosave, validation, improved PDF UX | Week 2 |
| **M3 – Interactive Content** | Knowledge Base filtering/search + Store cart interactions | Week 3 |
| **M4 – Dashboard Enhancements** | CRM/Analytics data layering, export options, charts | Week 4 |
| **M5 – UX Finishing** | Dark mode, 404 route, performance review, documentation refresh | Week 5 |

## Detailed Task Backlog
### P0 – Must Do Immediately
1. Refactor builder update handlers to use concrete types (remove `any` in `ResumeBuilder`, `ResumeForm`, `ExperienceForm`, `SkillsForm`, `ProjectsForm`).
2. Update `src/pages/ArticleDetail.tsx` switch cases to wrap declarations in blocks and satisfy `no-case-declarations`.
3. Clean escaped quotes in `src/data/articles.ts` to satisfy `no-useless-escape`.
4. Decide on Tailwind theming approach (upgrade to v4 or move theme tokens to `tailwind.config.js`) to eliminate the `@theme` build warning.
5. Add `DarkModeToggle` to the global header or remove it if not needed.

### P1 – High Priority
1. Implement localStorage autosave + "Clear data" actions for résumé and cover-letter builders.
2. Add reusable validation utils and UI indicators for incomplete sections.
3. Wire Knowledge Base search + category filter to actual state; debounce search input.
4. Implement store category filtering, mock cart state (line items, totals), and CTA behavior (email or contact form).
5. Add a catch-all `<Route path="*">` that redirects to home or shows a 404 component.

### P2 – Medium Priority
1. Extract CRM/Analytics data out of components, add filtering/sorting controls, and connect quick-action buttons to stub handlers.
2. Replace placeholder emoji charts with lightweight visualization (Recharts/SVG) fed by sample data.
3. Implement export buttons (CSV/PDF) for CRM lists and analytics metrics (even if stubbed with generated files).
4. Introduce testimonials or case studies on the store/landing pages to boost credibility.
5. Audit bundle size (especially `pdf-vendor`) and explore dynamic imports or worker-based PDF generation.

### P3 – Nice to Have
1. Add multi-theme résumé templates and allow downloading in DOCX format.
2. Integrate a CMS (e.g., Markdown files via Contentlayer) for articles to simplify updates.
3. Add contact/chat widget for real-time inquiries.

## Risks & Mitigations
- **Large PDF bundle (~2 MB)**: consider code-splitting PDF libraries further or switching to server-side generation.
- **Static placeholder data** may mislead visitors; mitigate by clearly labeling mock dashboards or connecting to lightweight backend data sources.
- **Tailwind v4 migration** introduces breaking changes; plan a separate branch and use the new CLI or continue with v3 conventions.

## Success Metrics
- ✅ `npm run lint` and `npm run build` pass locally and in CI on every commit.
- 📄 Résumé/Cover builders retain user data across refreshes and export PDFs without errors.
- 🔍 Knowledge Base search/filter reduces list to relevant items within 200 ms.
- 🛒 Store cart shows accurate totals and CTA drives contact conversions.
- 🎨 Dark mode + 404 route implemented; Lighthouse performance score ≥ 90 on key pages.
