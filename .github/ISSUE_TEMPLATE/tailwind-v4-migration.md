---
name: Tailwind CSS v4 Migration
about: Track the migration from Tailwind CSS v3 to v4
title: 'Migrate to Tailwind CSS v4.1.18'
labels: enhancement, dependencies, migration
assignees: ''
---

## 📋 Summary
Migrate from Tailwind CSS v3.4.17 to v4.1.18 for improved performance and modern CSS features.

## 🎯 Motivation
- **Performance:** 3-5x faster builds, 100x+ faster incremental builds
- **Modern CSS:** oklch P3 colors, container queries, 3D transforms
- **Simpler Config:** CSS-first configuration via `@theme` directive
- **Better DX:** Automatic content detection, built-in autoprefixer

## 📦 Current Status
**Hybrid State:** v4 packages installed but v3 configuration active

### Already Completed
- [x] `@tailwindcss/cli@4.1.14` installed
- [x] `@tailwindcss/postcss@4.1.14` installed
- [x] `@theme` directive added to `index.css`

### Needs Migration
- [ ] Update main `tailwindcss` package to v4.1.18
- [ ] Update `postcss.config.js` to use `@tailwindcss/postcss`
- [ ] Update `index.css` to use `@import "tailwindcss"`
- [ ] Remove `tailwind.config.js`
- [ ] Convert brand color to oklch format
- [ ] Test for breaking changes

## 🔧 Implementation Checklist

### Phase 1: Configuration (1-2 hours)
- [ ] Update `package.json` dependencies
  ```bash
  npm install -D tailwindcss@latest autoprefixer@latest
  ```
- [ ] Update `postcss.config.js`
  ```javascript
  export default {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  }
  ```
- [ ] Update `src/index.css`
  ```css
  @import "tailwindcss";

  @theme {
    --color-brand: oklch(0.567 0.177 271.06);
    --font-sans: ui-sans-serif, system-ui, sans-serif;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
  }
  ```
- [ ] Delete `tailwind.config.js`
- [ ] Run `npm install` to update lockfile

### Phase 2: Code Audit (2-3 hours)
- [ ] Search for `border` utilities (now uses `currentColor` instead of gray-200)
  ```bash
  grep -r "border\b" src/ --include="*.tsx" --include="*.jsx"
  ```
- [ ] Search for `ring` utilities (now 1px currentColor instead of 3px blue)
  ```bash
  grep -r "ring\b" src/ --include="*.tsx" --include="*.jsx"
  ```
- [ ] Check button cursor styles (now `cursor: default` instead of pointer)
  ```bash
  grep -r "<button" src/ --include="*.tsx" --include="*.jsx"
  ```
- [ ] Fix any breaking changes found

### Phase 3: Testing (1-2 hours)
- [ ] Test home page (`/`)
- [ ] Test portfolio/projects page
- [ ] Test contact page
- [ ] Test all custom components
- [ ] Test mobile responsiveness
- [ ] Test dark mode (if applicable)
- [ ] Verify build succeeds: `npm run build`
- [ ] Test preview: `npm run preview`

### Phase 4: Enhancement (Optional, 1 hour)
- [ ] Consider adding `@tailwindcss/vite` plugin for better performance
- [ ] Explore container queries for responsive components
- [ ] Try new v4 features (3D transforms, enhanced gradients)

### Phase 5: Documentation (30 mins)
- [ ] Update `README.md` with new tech stack version
- [ ] Update `TECH_SPECS.md`
- [ ] Document any breaking changes found
- [ ] Add before/after performance metrics

## 🧪 Testing Checklist

### Visual Testing
- [ ] No layout shifts or broken layouts
- [ ] Colors match previous design
- [ ] Borders and dividers visible where expected
- [ ] Hover states work correctly
- [ ] Focus states work correctly
- [ ] Responsive breakpoints function properly

### Functional Testing
- [ ] All links work
- [ ] Forms submit correctly
- [ ] PDF generation works (jspdf, html2canvas, @react-pdf/renderer)
- [ ] Routing works correctly
- [ ] No console errors

### Build Testing
- [ ] `npm run build` succeeds without errors
- [ ] CSS bundle size acceptable
- [ ] No missing dependencies
- [ ] Deploy to GitHub Pages works

## ⚠️ Breaking Changes

### Known Issues
1. **Border Utilities**
   - Old: `border` → gray-200 by default
   - New: `border` → currentColor
   - Fix: Add explicit color `border border-gray-200`

2. **Ring Utilities**
   - Old: `ring` → 3px blue ring
   - New: `ring` → 1px currentColor ring
   - Fix: Add explicit size/color `ring-3 ring-blue-500`

3. **Button Cursor**
   - Old: `cursor: pointer` by default
   - New: `cursor: default`
   - Fix: Add `cursor-pointer` class to buttons

### Migration Notes
Document any project-specific issues found during migration here.

## 📊 Performance Metrics

### Before (v3.4.17)
- Build time: TBD
- CSS bundle size: TBD
- First Contentful Paint: TBD

### After (v4.1.18)
- Build time: TBD
- CSS bundle size: TBD
- First Contentful Paint: TBD
- Improvement: TBD%

## 🔄 Rollback Plan

If critical issues are found:

```bash
# Create backup branch first
git checkout -b backup/pre-tailwind-v4

# If rollback needed
git checkout main
git revert <commit-hash>

# Or restore package.json
git checkout HEAD~1 package.json package-lock.json
npm install
```

## 📸 Screenshots

### Before
_Add screenshots of key pages with v3_

### After
_Add screenshots of same pages with v4_

## 🔗 Resources

- [Tailwind CSS v4.0 Release](https://tailwindcss.com/blog/tailwindcss-v4)
- [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [oklch Color Converter](https://oklch.com/)
- [Migration Plan Document](../TAILWIND_V4_MIGRATION_PLAN.md)

## 💬 Notes

_Additional notes, blockers, or questions go here_

---

**Estimated Effort:** 4-6 hours
**Priority:** Medium
**Risk Level:** Low-Medium
**Target Completion:** TBD
