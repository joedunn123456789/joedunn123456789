#!/bin/bash

# Setup GitHub Issues and Milestones for joevisualstoryteller
# This script creates all milestones and issues from the code review action plan

set -e

cd "$(dirname "$0")"

echo "🚀 Setting up GitHub Issues and Milestones for joevisualstoryteller"
echo "======================================================================"

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed"
    echo "📦 Installing GitHub CLI..."

    # Install gh CLI for Debian/Ubuntu
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
    sudo apt update
    sudo apt install gh -y

    echo "✅ GitHub CLI installed successfully"
fi

# Check authentication
echo "🔐 Checking GitHub authentication..."
if ! gh auth status &> /dev/null; then
    echo "⚠️  Not authenticated. Running 'gh auth login'..."
    gh auth login
fi

echo "✅ GitHub CLI authenticated"
echo ""

# Create Milestones
echo "📌 Creating Milestones..."
echo "========================="

gh milestone create "M1: Critical Fixes & Foundation" \
  --description "Fix blocking issues preventing quality checks and establish CI/CD pipeline. Success Criteria: npm run lint passes, no any types, GitHub Actions operational, no console.log statements." \
  --due-date "2026-01-12" || echo "⚠️  Milestone may already exist"

gh milestone create "M2: Code Quality & Testing" \
  --description "Establish testing framework and improve code quality metrics. Success Criteria: 60%+ test coverage, standardized PDF export, improved error handling, TypeScript path aliases." \
  --due-date "2026-01-26" || echo "⚠️  Milestone may already exist"

gh milestone create "M3: Feature Enhancements" \
  --description "Add autosave, validation, and interactive features. Success Criteria: Resume/Cover Letter autosave, form validation, Knowledge Base search, Store cart functionality." \
  --due-date "2026-02-09" || echo "⚠️  Milestone may already exist"

gh milestone create "M4: UX Polish & Performance" \
  --description "Improve accessibility, add dark mode, optimize performance. Success Criteria: Dark mode functional, 404 page, accessibility improvements, bundle size < 500KB, Lighthouse score ≥ 90." \
  --due-date "2026-02-23" || echo "⚠️  Milestone may already exist"

gh milestone create "M5: Production Ready" \
  --description "Final polish and documentation. Success Criteria: All docs updated, security audit complete, performance monitoring, SEO optimization, production deployment." \
  --due-date "2026-03-02" || echo "⚠️  Milestone may already exist"

echo "✅ Milestones created"
echo ""

# Create Issues
echo "📝 Creating Issues..."
echo "===================="

# Issue #1: Fix ESLint
gh issue create \
  --title "Fix ESLint Flat Config" \
  --milestone "M1: Critical Fixes & Foundation" \
  --label "bug,critical,tooling,good-first-issue" \
  --body "## Description
ESLint configuration is broken and prevents linting. The flat config format is incorrectly using \`extends\` with array-based plugins.

## Current Issue
\`\`\`javascript
// eslint.config.js - BROKEN
extends: [
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
],
\`\`\`

## Expected Fix
- Rewrite to use proper flat config format
- Import plugins as objects
- Configure rules properly

## Acceptance Criteria
- [ ] \`npm run lint\` runs successfully
- [ ] All existing lint rules still apply
- [ ] No warnings about plugin configuration

## Files Affected
- \`eslint.config.js\`

## Resources
- [ESLint Flat Config Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)

**Effort:** 2-3 hours
**Priority:** Critical" || echo "⚠️  Issue may already exist"

# Issue #2: Eliminate any types
gh issue create \
  --title "Eliminate All \`any\` Types" \
  --milestone "M1: Critical Fixes & Foundation" \
  --label "typescript,critical,code-quality" \
  --body "## Description
19 files use \`any\` type, defeating TypeScript's type safety purpose.

## Locations
- \`src/components/ResumeBuilder/ResumeBuilder.tsx:14\`
- \`src/components/ResumeBuilder/ResumeForm.tsx\`
- \`src/components/ResumeBuilder/sections/*.tsx\`
- \`src/components/CoverLetterBuilder/*.tsx\`

## Example Issue
\`\`\`typescript
const updateResumeData = (section: keyof ResumeData, data: any) => {
  // ^^^ any type here
}
\`\`\`

## Expected Fix
\`\`\`typescript
type ResumeDataUpdate<K extends keyof ResumeData> = {
  section: K;
  data: ResumeData[K];
};

const updateResumeData = <K extends keyof ResumeData>(
  section: K,
  data: ResumeData[K]
) => {
  setResumeData(prev => ({
    ...prev,
    [section]: data
  }));
};
\`\`\`

## Acceptance Criteria
- [ ] Zero \`any\` types in codebase
- [ ] All functions have explicit parameter and return types
- [ ] \`tsc --noEmit\` passes without warnings

## Resources
- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

**Effort:** 6-8 hours
**Priority:** Critical" || echo "⚠️  Issue may already exist"

# Issue #3: Add CI/CD
gh issue create \
  --title "Add GitHub Actions CI/CD Pipeline" \
  --milestone "M1: Critical Fixes & Foundation" \
  --label "infrastructure,critical,ci-cd" \
  --body "## Description
No automated testing, building, or deployment despite having deploy scripts.

## Required Workflows

### 1. CI Workflow (\`.github/workflows/ci.yml\`)
- Run on push to main and all PRs
- Lint code
- Type check
- Run tests
- Build project

### 2. Deploy Workflow (\`.github/workflows/deploy.yml\`)
- Run on push to main
- Build production bundle
- Deploy to GitHub Pages
- Only if CI passes

## Acceptance Criteria
- [ ] CI workflow runs on every PR
- [ ] Deploy workflow runs on main branch
- [ ] Build artifacts cached for faster builds
- [ ] Status badges added to README

## Files to Create
- \`.github/workflows/ci.yml\`
- \`.github/workflows/deploy.yml\`

## Resources
- [GitHub Actions Docs](https://docs.github.com/en/actions)

**Effort:** 3-4 hours
**Priority:** Critical" || echo "⚠️  Issue may already exist"

# Issue #4: Remove console statements
gh issue create \
  --title "Remove Console Statements or Add Proper Logging" \
  --milestone "M1: Critical Fixes & Foundation" \
  --label "code-quality,critical" \
  --body "## Description
Console.log/error statements found in 3+ files should be replaced with proper logging utility.

## Locations
- \`src/hooks/ResumePage/usePDFExport.ts:25\`
- \`src/components/ResumeBuilder/ResumeBuilder.tsx:28\`
- \`src/components/CoverLetterBuilder/CoverLetterBuilder.tsx\`

## Solution Options
1. Create logging utility (\`src/utils/logger.ts\`)
2. Use environment-based logging
3. Integrate proper error tracking (Sentry, LogRocket)

## Acceptance Criteria
- [ ] No console.log in production code
- [ ] Errors properly logged with context
- [ ] Development logging still available
- [ ] Logging utility documented

**Effort:** 2 hours
**Priority:** Critical" || echo "⚠️  Issue may already exist"

# Issue #5: Add unit tests
gh issue create \
  --title "Add Unit Tests with Vitest" \
  --milestone "M2: Code Quality & Testing" \
  --label "testing,high-priority,infrastructure" \
  --body "## Description
No tests exist. Add Vitest + React Testing Library for component testing.

## Setup Required
\`\`\`bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
\`\`\`

## Test Coverage Goals
- Utilities: 80%+ coverage
- Components: 60%+ coverage
- Overall: 60%+ coverage

## Priority Test Areas
1. \`src/utils/pdfExport.ts\`
2. \`src/components/ResumeBuilder/ResumeBuilder.tsx\`
3. \`src/types/\` (type validation)
4. Form components

## Acceptance Criteria
- [ ] Vitest configured in \`vite.config.ts\`
- [ ] At least 20 tests written
- [ ] \`npm run test\` script added
- [ ] Coverage reporting configured
- [ ] Tests run in CI pipeline

## Resources
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)

**Effort:** 12-16 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #6: Standardize PDF export
gh issue create \
  --title "Standardize PDF Export Solution" \
  --milestone "M2: Code Quality & Testing" \
  --label "refactoring,high-priority,feature" \
  --body "## Description
Two different PDF solutions create duplication and inconsistency:
1. \`html2canvas\` + \`jsPDF\` (in \`utils/pdfExport.ts\`)
2. \`@react-pdf/renderer\` (in \`hooks/usePDFExport.ts\`)

**Recommendation:** Choose \`@react-pdf/renderer\` (better for React, smaller bundle)

## Migration Plan
1. Audit both implementations
2. Choose one approach (recommend @react-pdf/renderer)
3. Migrate all PDF exports to chosen solution
4. Remove unused libraries
5. Update documentation

## Acceptance Criteria
- [ ] Single PDF export solution
- [ ] Resume builder uses same PDF as Resume page
- [ ] Cover letter uses same approach
- [ ] Unused dependencies removed
- [ ] Bundle size reduced by ~200KB

## Files Affected
- \`src/utils/pdfExport.ts\`
- \`src/utils/coverLetterPdfExport.ts\`
- \`src/hooks/ResumePage/usePDFExport.ts\`
- \`package.json\`

**Effort:** 6-8 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #7: Improve error handling
gh issue create \
  --title "Improve Error Handling" \
  --milestone "M2: Code Quality & Testing" \
  --label "code-quality,high-priority,ux" \
  --body "## Description
Error handling uses generic alerts and doesn't provide context.

## Current Pattern
\`\`\`typescript
catch (error) {
  console.error('Failed to export PDF:', error);
  alert('Error generating PDF. Please try again.');
}
\`\`\`

## Improved Pattern
\`\`\`typescript
// src/utils/errorHandler.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public userMessage: string,
    public details?: unknown
  ) {
    super(message);
  }
}

// Usage
try {
  await exportToPDF(data);
} catch (error) {
  throw new AppError(
    'PDF export failed',
    'PDF_EXPORT_ERROR',
    'We couldn\\'t generate your PDF. Please check your data and try again.',
    error
  );
}
\`\`\`

## Acceptance Criteria
- [ ] \`AppError\` class created
- [ ] Error boundary component added
- [ ] Toast notification system for errors
- [ ] User-friendly error messages
- [ ] Error tracking integration ready

**Effort:** 4-6 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #8: Add TypeScript path aliases
gh issue create \
  --title "Add TypeScript Path Aliases" \
  --milestone "M2: Code Quality & Testing" \
  --label "developer-experience,high-priority" \
  --body "## Description
Improve import paths with TypeScript aliases.

## Current
\`\`\`typescript
import { ResumeData } from '../../../types/resume';
import { exportToPDF } from '../../../utils/pdfExport';
\`\`\`

## Desired
\`\`\`typescript
import { ResumeData } from '@/types/resume';
import { exportToPDF } from '@/utils/pdfExport';
\`\`\`

## Configuration
\`\`\`json
// tsconfig.json
{
  \"compilerOptions\": {
    \"baseUrl\": \".\",
    \"paths\": {
      \"@/*\": [\"src/*\"],
      \"@components/*\": [\"src/components/*\"],
      \"@utils/*\": [\"src/utils/*\"],
      \"@types/*\": [\"src/types/*\"]
    }
  }
}
\`\`\`

## Acceptance Criteria
- [ ] Path aliases configured in \`tsconfig.json\`
- [ ] Vite config updated with resolve aliases
- [ ] All relative imports updated
- [ ] Documentation updated

**Effort:** 2 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #9: Evaluate Vite override
gh issue create \
  --title "Evaluate Vite Override (rolldown-vite)" \
  --milestone "M2: Code Quality & Testing" \
  --label "investigation,high-priority,dependencies" \
  --body "## Description
Using \`rolldown-vite\` instead of official Vite may cause issues.

\`\`\`json
\"vite\": \"npm:rolldown-vite@7.1.14\"
\`\`\`

## Investigation Required
1. Why was rolldown-vite chosen?
2. What features does it provide?
3. Are there compatibility risks?
4. Can we migrate back to official Vite?

## Acceptance Criteria
- [ ] Document reasoning for rolldown-vite
- [ ] Test with official Vite
- [ ] Migrate if no issues found
- [ ] Update documentation

**Effort:** 2-3 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #10: Add autosave
gh issue create \
  --title "Add Resume/Cover Letter Autosave" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,high-priority,ux" \
  --body "## Description
Users lose data on refresh. Implement localStorage autosave.

## Implementation
\`\`\`typescript
// src/hooks/useAutosave.ts
export const useAutosave = <T>(
  key: string,
  data: T,
  debounceMs = 1000
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(data));
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [data, key, debounceMs]);

  const loadSaved = (): T | null => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };

  const clearSaved = () => {
    localStorage.removeItem(key);
  };

  return { loadSaved, clearSaved };
};
\`\`\`

## Acceptance Criteria
- [ ] Autosave hook created
- [ ] Resume builder uses autosave
- [ ] Cover letter builder uses autosave
- [ ] \"Restore saved data\" prompt on load
- [ ] \"Clear saved data\" button added
- [ ] Tests written

**Effort:** 4-6 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #11: Add form validation
gh issue create \
  --title "Add Form Validation" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,high-priority,ux" \
  --body "## Description
No validation on form inputs. Users can submit incomplete/invalid data.

## Requirements
1. Email validation
2. Phone number formatting
3. Required field indicators
4. Section completion progress
5. Inline error messages

## Libraries to Consider
- \`react-hook-form\` + \`zod\`
- \`formik\` + \`yup\`

## Acceptance Criteria
- [ ] Validation library integrated
- [ ] All forms validated
- [ ] Error messages user-friendly
- [ ] Section completion indicators
- [ ] Tests for validation logic

**Effort:** 6-8 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #12: Implement Knowledge Base search
gh issue create \
  --title "Implement Knowledge Base Search/Filter" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,high-priority" \
  --body "## Description
Knowledge Base has no search or filtering functionality.

## Features
1. Search by title/description/tags
2. Filter by category
3. URL persistence of search params
4. Debounced search input
5. \"No results\" state

## Implementation
\`\`\`typescript
// Use URL search params for persistence
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('q') || '';
const category = searchParams.get('category') || 'all';

const filteredArticles = articles.filter(article => {
  const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase());
  const matchesCategory = category === 'all' || article.category === category;
  return matchesQuery && matchesCategory;
});
\`\`\`

## Acceptance Criteria
- [ ] Search input with debounce
- [ ] Category filter buttons
- [ ] URL params persist filters
- [ ] Results count displayed
- [ ] Smooth animations
- [ ] Tests written

**Effort:** 4-6 hours
**Priority:** High" || echo "⚠️  Issue may already exist"

# Issue #13: Replace innerHTML
gh issue create \
  --title "Replace innerHTML with React State" \
  --milestone "M4: UX Polish & Performance" \
  --label "refactoring,security,medium-priority" \
  --body "## Description
\`pdfExport.ts\` uses innerHTML manipulation for loading state.

## Current
\`\`\`typescript
const originalContent = resumeElement.innerHTML;
resumeElement.innerHTML = '<div class=\"pdf-loading\">Generating PDF...</div>';
\`\`\`

## Better Approach
\`\`\`typescript
// Use React state
const [isPDFGenerating, setIsPDFGenerating] = useState(false);

// In component
{isPDFGenerating && <div className=\"pdf-loading\">Generating PDF...</div>}
\`\`\`

## Acceptance Criteria
- [ ] No innerHTML usage
- [ ] React state manages loading
- [ ] Same UX maintained
- [ ] Security improved

**Effort:** 2-3 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #14: Add dark mode
gh issue create \
  --title "Add Dark Mode" \
  --milestone "M4: UX Polish & Performance" \
  --label "feature,ux,medium-priority" \
  --body "## Description
Dark mode toggle exists but isn't integrated into the app.

## Implementation
1. Use Tailwind's dark mode
2. Add theme context
3. Persist preference in localStorage
4. Add toggle to header
5. Ensure all pages support dark mode

## Configuration
\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
\`\`\`

## Acceptance Criteria
- [ ] Dark mode toggle in header
- [ ] Theme persists across sessions
- [ ] All pages styled for dark mode
- [ ] Smooth theme transition
- [ ] System preference detection

**Effort:** 6-8 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #15: Add 404 page
gh issue create \
  --title "Add 404 Page" \
  --milestone "M4: UX Polish & Performance" \
  --label "feature,ux,medium-priority" \
  --body "## Description
No 404 or error page for unknown routes.

## Implementation
\`\`\`tsx
// src/pages/NotFound.tsx
export default function NotFound() {
  return (
    <div className=\"flex flex-col items-center justify-center min-h-[60vh]\">
      <h1 className=\"text-6xl font-bold text-gray-800\">404</h1>
      <p className=\"text-xl text-gray-600 mt-4\">Page not found</p>
      <Link to=\"/\" className=\"mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg\">
        Return Home
      </Link>
    </div>
  );
}

// In App.tsx
<Route path=\"*\" element={<NotFound />} />
\`\`\`

## Acceptance Criteria
- [ ] 404 page created
- [ ] Catch-all route added
- [ ] Link back to home
- [ ] Styled consistently
- [ ] Tests written

**Effort:** 2 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #16: Improve accessibility
gh issue create \
  --title "Improve Accessibility" \
  --milestone "M4: UX Polish & Performance" \
  --label "a11y,ux,medium-priority" \
  --body "## Description
Limited accessibility features. Need ARIA labels, keyboard navigation, focus management.

## Audit Areas
1. Keyboard navigation
2. Screen reader support
3. Focus management (especially in modals)
4. Color contrast ratios
5. ARIA landmarks and labels

## Tools
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension

## Acceptance Criteria
- [ ] Lighthouse accessibility score ≥ 90
- [ ] All interactive elements keyboard accessible
- [ ] Proper ARIA labels
- [ ] Focus management in modals
- [ ] Color contrast meets WCAG AA
- [ ] Skip to content link

**Effort:** 8-10 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #17: Add store cart
gh issue create \
  --title "Add Store Cart Functionality" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,medium-priority" \
  --body "## Description
Store page has no cart functionality.

## Features
1. Add to cart button
2. Cart state management
3. Cart sidebar/modal
4. Quantity adjustment
5. Total calculation
6. Checkout CTA (contact form)

## Acceptance Criteria
- [ ] Cart context created
- [ ] Add/remove/update items
- [ ] Cart persists in localStorage
- [ ] Cart UI component
- [ ] Checkout flow (contact form)
- [ ] Tests written

**Effort:** 6-8 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #18: Add CRM filtering
gh issue create \
  --title "Add CRM Data Filtering/Sorting" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,medium-priority" \
  --body "## Description
CRM dashboard has static data with no interactivity.

## Features
1. Sort by columns (name, date, status)
2. Filter by status
3. Search by name/company
4. Pagination
5. Export to CSV

## Acceptance Criteria
- [ ] Sort functionality
- [ ] Filter controls
- [ ] Search input
- [ ] Pagination (10/25/50 per page)
- [ ] CSV export
- [ ] Tests written

**Effort:** 6-8 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #19: Add charts
gh issue create \
  --title "Add Analytics Chart Visualizations" \
  --milestone "M3: Feature Enhancements" \
  --label "feature,medium-priority" \
  --body "## Description
Analytics page uses placeholder emojis instead of real charts.

## Library Options
- Recharts (recommended - React-friendly)
- Chart.js
- D3.js (more complex)

## Charts Needed
1. Revenue over time (line chart)
2. Sales by category (pie chart)
3. Monthly comparison (bar chart)
4. Trend indicators (sparklines)

## Acceptance Criteria
- [ ] Chart library integrated
- [ ] 4+ interactive charts
- [ ] Responsive design
- [ ] Sample data source
- [ ] Export chart data
- [ ] Tests written

**Effort:** 8-10 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #20: Bundle optimization
gh issue create \
  --title "Bundle Size Optimization" \
  --milestone "M4: UX Polish & Performance" \
  --label "performance,medium-priority" \
  --body "## Description
Bundle size warning limit set to 2500KB is very high. Need analysis and optimization.

## Tasks
1. Run bundle analyzer
2. Identify large dependencies
3. Implement dynamic imports
4. Optimize images
5. Remove unused dependencies

## Commands
\`\`\`bash
npm install -D rollup-plugin-visualizer
\`\`\`

## Acceptance Criteria
- [ ] Bundle analysis report
- [ ] Main bundle < 300KB
- [ ] Vendor bundles optimized
- [ ] Images optimized/lazy loaded
- [ ] Warning limit reduced to 1000KB
- [ ] Lighthouse performance ≥ 90

**Effort:** 4-6 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #21: Better loading states
gh issue create \
  --title "Add Loading States for Lazy Routes" \
  --milestone "M4: UX Polish & Performance" \
  --label "ux,medium-priority" \
  --body "## Description
Generic \"Loading...\" text for lazy routes. Need better UX.

## Current
\`\`\`tsx
<Suspense fallback={<div>Loading...</div>}>
\`\`\`

## Improved
\`\`\`tsx
// src/components/LoadingFallback.tsx
export default function LoadingFallback() {
  return (
    <div className=\"flex items-center justify-center min-h-screen\">
      <div className=\"text-center\">
        <div className=\"animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto\"></div>
        <p className=\"mt-4 text-gray-600\">Loading...</p>
      </div>
    </div>
  );
}
\`\`\`

## Acceptance Criteria
- [ ] Attractive loading component
- [ ] Spinner animation
- [ ] Used across all lazy routes
- [ ] Skeleton screens for key pages

**Effort:** 2-3 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

# Issue #22: Add error boundaries
gh issue create \
  --title "Add Error Boundaries" \
  --milestone "M4: UX Polish & Performance" \
  --label "error-handling,ux,medium-priority" \
  --body "## Description
No error boundaries to catch React errors gracefully.

## Acceptance Criteria
- [ ] ErrorBoundary component
- [ ] ErrorFallback UI
- [ ] Wrapped around key components
- [ ] Error logging integration
- [ ] Tests written

**Effort:** 3-4 hours
**Priority:** Medium" || echo "⚠️  Issue may already exist"

echo ""
echo "✅ All issues created successfully!"
echo ""
echo "📊 Summary:"
echo "  - 5 Milestones created"
echo "  - 22 Issues created"
echo ""
echo "🌐 View your project:"
echo "  https://github.com/JoeVisualStoryteller/joevisualstoryteller/issues"
echo "  https://github.com/JoeVisualStoryteller/joevisualstoryteller/milestones"
echo ""
echo "🚀 Next Steps:"
echo "  1. Create a GitHub Project board"
echo "  2. Link issues to the project"
echo "  3. Start with Milestone 1 (Critical Fixes)"
echo ""
