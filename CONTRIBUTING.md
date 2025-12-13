# Contributing to Joseph Dunn's Portfolio & Business Tools

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [How to Contribute](#how-to-contribute)
5. [Coding Standards](#coding-standards)
6. [Commit Guidelines](#commit-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Issue Reporting](#issue-reporting)

---

## Code of Conduct

### Our Pledge

This project aims to be welcoming and inclusive. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the project and community
- Show empathy towards other contributors

### Our Standards

**Acceptable Behavior:**
- Constructive feedback and suggestions
- Collaborative problem-solving
- Professional communication
- Helping other contributors

**Unacceptable Behavior:**
- Harassment, trolling, or personal attacks
- Publishing others' private information
- Spam or off-topic discussions
- Any conduct that could be considered inappropriate in a professional setting

---

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (v2.x or higher)
- A GitHub account
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Ways to Contribute

There are many ways to contribute:

1. **Report Bugs** - Found a bug? Let us know!
2. **Suggest Features** - Have an idea? We'd love to hear it
3. **Fix Issues** - Browse open issues and submit fixes
4. **Improve Documentation** - Help make docs clearer
5. **Code Improvements** - Refactoring, optimization, testing
6. **Design Enhancements** - UI/UX improvements

---

## Development Setup

### 1. Fork the Repository

Click the "Fork" button at the top right of the [repository page](https://github.com/joevisualstoryteller/joevisualstoryteller).

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/joedunn123456789.git
cd joedunn123456789
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/joevisualstoryteller/joevisualstoryteller.git
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 6. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

---

## How to Contribute

### Small Changes (Documentation, Typos)

For minor changes:
1. Fork the repository
2. Make your changes
3. Submit a pull request directly

### Larger Changes (Features, Refactoring)

For substantial changes:
1. **Open an Issue First** - Discuss your proposed changes
2. Wait for feedback and approval
3. Fork and create a feature branch
4. Implement your changes
5. Submit a pull request

---

## Coding Standards

### TypeScript Guidelines

- **Use TypeScript strict mode** - No `any` types unless absolutely necessary
- **Define proper interfaces** - Place in `src/types/`
- **Export types** - Make reusable types available
- **Use type inference** - Don't over-annotate when TypeScript can infer

**Example:**
```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = (id: string): User => {
  // implementation
}

// Avoid
const getUser = (id: any): any => {
  // implementation
}
```

### React Component Guidelines

- **Use functional components** with hooks
- **Prefer named exports** for components
- **One component per file** (except small, tightly coupled sub-components)
- **Props interfaces** should be defined above the component

**Example:**
```typescript
// src/components/MyComponent/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  onSubmit: (data: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onSubmit }) => {
  return (
    <div>{title}</div>
  );
};

export default MyComponent;
```

### Tailwind CSS Guidelines

- **Use Tailwind utility classes** - Avoid custom CSS unless necessary
- **Responsive design** - Use `sm:`, `md:`, `lg:` breakpoints
- **Consistent spacing** - Follow the spacing scale (p-4, m-8, etc.)
- **Extract components** - If a pattern repeats, create a component

### File Organization

```
src/
├── components/           # Reusable UI components
│   └── ComponentName/
│       ├── ComponentName.tsx
│       └── SubComponent.tsx
├── pages/                # Page-level components
├── data/                 # Static data and initial states
├── types/                # TypeScript interfaces and types
├── utils/                # Utility functions
└── hooks/                # Custom React hooks
```

### Naming Conventions

- **Components**: PascalCase (`ResumeBuilder.tsx`)
- **Files**: camelCase for utilities (`pdfExport.ts`)
- **Variables/Functions**: camelCase (`getUserData`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Interfaces**: PascalCase, descriptive (`ResumeData`, `UserProfile`)

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(resume-builder): add skill level indicators

- Added dropdown for skill proficiency levels
- Updated ResumeData interface
- Modified PDF export to include levels

Closes #42
```

```bash
fix(pdf-export): resolve filename sanitization issue

Fixed bug where special characters in names caused PDF export to fail.

Fixes #38
```

```bash
docs(readme): update installation instructions

Added troubleshooting section for npm install issues
```

### Commit Best Practices

- **Write clear, descriptive messages**
- **Use present tense** ("add feature" not "added feature")
- **Reference issues** when applicable (#issue-number)
- **Keep commits focused** - One logical change per commit
- **Test before committing** - Ensure code works

---

## Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] All tests pass (`npm run lint`)
- [ ] No TypeScript errors (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commits are clean and well-organized
- [ ] Branch is up-to-date with main

### Submitting Your PR

1. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

3. **PR Title Format**
   ```
   [Type] Brief description of changes
   ```
   Example: `[Feature] Add dark mode toggle to settings`

4. **PR Description Should Include**
   - What changes were made
   - Why these changes are needed
   - How to test the changes
   - Screenshots (for UI changes)
   - Related issue numbers

### PR Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
How to test these changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Tests pass

## Related Issues
Closes #(issue number)
```

### Review Process

- Maintainers will review your PR within 3-5 business days
- You may be asked to make changes
- Once approved, your PR will be merged
- Your contribution will be credited in the release notes

---

## Issue Reporting

### Before Opening an Issue

1. **Search existing issues** - Your issue may already be reported
2. **Check documentation** - Review README and USER_GUIDE
3. **Reproduce the bug** - Ensure it's consistent
4. **Gather information** - Browser, OS, steps to reproduce

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11, macOS 14]
- Device: [e.g., Desktop, iPhone 14]

## Additional Context
Any other relevant information
```

### Feature Request Template

```markdown
## Feature Description
Clear description of the proposed feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Mockups, examples, references
```

---

## Development Tips

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

### Common Tasks

**Adding a New Page:**
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

**Adding a New Component:**
1. Create folder in `src/components/`
2. Create component file and index
3. Define props interface
4. Export component

**Debugging PDF Export:**
- Check browser console for errors
- Test with different data inputs
- Verify PDF generation libraries are working

---

## Recognition

All contributors will be recognized in:
- Project README (Contributors section)
- Release notes
- Git commit history

Thank you for contributing to make this project better!

---

## Questions?

If you have questions:
- Open a [Discussion](https://github.com/joevisualstoryteller/joevisualstoryteller/discussions)
- Comment on an existing issue
- Review existing documentation

---

**Project Maintainer**: Joseph Henry Dunn II
**Repository**: https://github.com/joevisualstoryteller/joevisualstoryteller
**Last Updated**: October 2025
