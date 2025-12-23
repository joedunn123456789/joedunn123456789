# GitHub Issues & Project Setup Instructions

This guide will help you set up the complete GitHub project management structure for joevisualstoryteller based on the comprehensive code review.

---

## 📋 Quick Start

### Option 1: Automated Setup (Recommended)

Run the provided setup script:

```bash
cd /home/footlover/Documents/Github/joevisualstoryteller
./setup-github-issues.sh
```

This script will:
- Install GitHub CLI if needed
- Authenticate with GitHub
- Create 5 milestones
- Create 22 issues with proper labels and assignments

### Option 2: Manual Setup

If you prefer to create issues manually or the script doesn't work, follow the manual instructions below.

---

## 🎯 Milestones to Create

Navigate to: `https://github.com/JoeVisualStoryteller/joevisualstoryteller/milestones/new`

### Milestone 1: Critical Fixes & Foundation
- **Due Date:** January 12, 2026 (2 weeks)
- **Description:** Fix blocking issues preventing quality checks and establish CI/CD pipeline
- **Success Criteria:**
  - ✅ `npm run lint` passes without errors
  - ✅ TypeScript compilation succeeds with no `any` types
  - ✅ GitHub Actions CI/CD pipeline operational
  - ✅ All console.log statements removed or replaced

### Milestone 2: Code Quality & Testing
- **Due Date:** January 26, 2026 (2 weeks)
- **Description:** Establish testing framework and improve code quality metrics
- **Success Criteria:**
  - ✅ Unit tests added with 60%+ coverage
  - ✅ Standardized PDF export solution
  - ✅ Improved error handling throughout
  - ✅ TypeScript path aliases configured

### Milestone 3: Feature Enhancements
- **Due Date:** February 9, 2026 (2 weeks)
- **Description:** Add autosave, validation, and interactive features
- **Success Criteria:**
  - ✅ Resume/Cover Letter autosave with localStorage
  - ✅ Form validation with user feedback
  - ✅ Knowledge Base search and filtering
  - ✅ Store cart functionality

### Milestone 4: UX Polish & Performance
- **Due Date:** February 23, 2026 (2 weeks)
- **Description:** Improve accessibility, add dark mode, optimize performance
- **Success Criteria:**
  - ✅ Dark mode implemented and functional
  - ✅ 404 page and error boundaries
  - ✅ Accessibility improvements (ARIA, keyboard nav)
  - ✅ Bundle size < 500KB, Lighthouse score ≥ 90

### Milestone 5: Production Ready
- **Due Date:** March 2, 2026 (1 week)
- **Description:** Final polish and documentation
- **Success Criteria:**
  - ✅ All documentation updated
  - ✅ Security audit completed
  - ✅ Performance monitoring in place
  - ✅ Production deployment

---

## 🏷️ Labels to Create

Navigate to: `https://github.com/JoeVisualStoryteller/joevisualstoryteller/labels`

Create the following labels (Name | Color | Description):

### Priority Labels
- `critical` | `#d73a4a` | Blocking issues that must be fixed immediately
- `high-priority` | `#ff9800` | Important issues for next sprint
- `medium-priority` | `#ffc107` | Standard priority issues
- `low-priority` | `#4caf50` | Nice-to-have enhancements

### Type Labels
- `bug` | `#d73a4a` | Something isn't working
- `feature` | `#0e8a16` | New feature or request
- `enhancement` | `#a2eeef` | Improvement to existing feature
- `refactoring` | `#5319e7` | Code refactoring
- `documentation` | `#0075ca` | Documentation improvements

### Area Labels
- `typescript` | `#3178c6` | TypeScript related
- `testing` | `#2ea44f` | Testing infrastructure
- `ci-cd` | `#1f883d` | CI/CD pipeline
- `infrastructure` | `#0e4429` | Project infrastructure
- `tooling` | `#006b75` | Development tools
- `code-quality` | `#8957e5` | Code quality improvements
- `performance` | `#ff6b6b` | Performance optimization
- `security` | `#b60205` | Security issues
- `a11y` | `#0052cc` | Accessibility
- `ux` | `#c5def5` | User experience
- `developer-experience` | `#bfdadc` | Developer experience

### Other Labels
- `good-first-issue` | `#7057ff` | Good for newcomers
- `investigation` | `#fbca04` | Needs investigation

---

## 📊 Create GitHub Project Board

### Step 1: Create New Project

1. Navigate to: `https://github.com/JoeVisualStoryteller/joevisualstoryteller/projects`
2. Click "New project"
3. Select "Board" template
4. Name: **"joevisualstoryteller Roadmap"**
5. Description: **"Code review action plan and feature roadmap"**

### Step 2: Configure Board Columns

Create the following columns (in order):

1. **📋 Backlog**
   - Description: Issues that are planned but not yet started

2. **🎯 Ready**
   - Description: Issues ready to be worked on

3. **🚧 In Progress**
   - Description: Currently being worked on

4. **👀 In Review**
   - Description: Waiting for code review

5. **✅ Done**
   - Description: Completed and deployed

### Step 3: Add Automation (Optional)

For each column, configure automation:

- **📋 Backlog:** Auto-add new issues
- **🚧 In Progress:** Auto-move when issue assigned
- **👀 In Review:** Auto-move when PR created
- **✅ Done:** Auto-move when issue closed

### Step 4: Add Custom Fields

Add these custom fields to track additional metadata:

1. **Effort** (Number)
   - Description: Estimated hours

2. **Priority** (Single select)
   - Options: Critical, High, Medium, Low

3. **Milestone** (Iteration)
   - Link to GitHub milestones

4. **Status** (Status)
   - Matches column names

---

## 🚀 Running the Setup Script

### Prerequisites

1. **Git configured with SSH:**
   ```bash
   git remote -v
   # Should show: git@github.com:JoeVisualStoryteller/joevisualstoryteller.git
   ```

2. **GitHub permissions:**
   - Write access to the repository
   - Ability to create issues and milestones

### Execute Setup

```bash
# Navigate to project directory
cd /home/footlover/Documents/Github/joevisualstoryteller

# Make script executable (if not already)
chmod +x setup-github-issues.sh

# Run the script
./setup-github-issues.sh
```

### What the Script Does

1. ✅ Checks for GitHub CLI installation
2. ✅ Installs gh CLI if needed (requires sudo)
3. ✅ Authenticates with GitHub
4. ✅ Creates 5 milestones with due dates
5. ✅ Creates 22 issues with:
   - Detailed descriptions
   - Acceptance criteria
   - Effort estimates
   - Proper labels
   - Milestone assignments
   - Code examples

### Troubleshooting

**Issue:** `gh: command not found`
```bash
# Install manually
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh -y
```

**Issue:** Authentication failed
```bash
# Login to GitHub
gh auth login
# Select: GitHub.com > SSH > Login with web browser
```

**Issue:** Milestone already exists
```bash
# Script will warn but continue
# Manually delete duplicates if needed
```

---

## 📈 Project Workflow

### For Each Issue

1. **Assign yourself** to the issue
2. **Move to "Ready"** column when starting
3. **Create a feature branch:**
   ```bash
   git checkout -b feature/issue-number-short-description
   ```
4. **Work on the issue** following acceptance criteria
5. **Move to "In Review"** when creating PR
6. **Link PR to issue** in PR description:
   ```markdown
   Closes #issue-number
   ```
7. **After merge,** issue auto-moves to "Done"

### Branch Naming Convention

```
feature/1-fix-eslint-config
feature/2-eliminate-any-types
bugfix/12-knowledge-base-search
refactor/6-standardize-pdf-export
docs/update-readme
```

### Commit Message Format

```
type(scope): short description

Longer description if needed

Fixes #issue-number
```

**Types:** feat, fix, refactor, docs, test, chore, style

**Examples:**
```
fix(eslint): migrate to flat config format

- Remove extends array
- Import plugins as objects
- Update rules configuration

Fixes #1
```

```
feat(resume): add autosave functionality

- Implement useAutosave hook
- Add localStorage persistence
- Show restore prompt on load

Fixes #10
```

---

## 📊 Tracking Progress

### View Progress Dashboard

```bash
# List all milestones with progress
gh milestone list

# View specific milestone
gh milestone view "M1: Critical Fixes & Foundation"

# List issues for a milestone
gh issue list --milestone "M1: Critical Fixes & Foundation"

# View project board
# Navigate to: https://github.com/JoeVisualStoryteller/joevisualstoryteller/projects
```

### Generate Progress Report

```bash
# All open issues
gh issue list --state open

# Issues by label
gh issue list --label "critical"
gh issue list --label "high-priority"

# Issues by milestone
gh issue list --milestone "M1: Critical Fixes & Foundation" --json number,title,state,labels

# Issues assigned to you
gh issue list --assignee @me
```

---

## 🎯 Getting Started Checklist

- [ ] Run `./setup-github-issues.sh` or create issues manually
- [ ] Create labels (if using manual setup)
- [ ] Create GitHub Project board
- [ ] Configure board columns and automation
- [ ] Review all created issues
- [ ] Assign yourself to Milestone 1 issues
- [ ] Start with Issue #1 (Fix ESLint Config)
- [ ] Create feature branch
- [ ] Begin coding!

---

## 📚 Additional Resources

### Code Review Documents
- [CODE_REVIEW_ACTION_PLAN.md](./CODE_REVIEW_ACTION_PLAN.md) - Full action plan with 28 issues
- [PROJECT_PLAN.md](./PROJECT_PLAN.md) - Original project plan
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines

### GitHub Documentation
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones)

### Development Tools
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/migration-guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)

---

## 🤝 Need Help?

If you encounter issues with the setup:

1. **Check the script output** for specific error messages
2. **Review GitHub CLI auth:** `gh auth status`
3. **Verify repository access:** `gh repo view`
4. **Create issues manually** using the detailed descriptions in CODE_REVIEW_ACTION_PLAN.md
5. **Open a GitHub issue** for script bugs

---

**Last Updated:** December 22, 2025
**Maintainer:** Joseph Dunn (@JoeVisualStoryteller)

Good luck with your project! 🚀
