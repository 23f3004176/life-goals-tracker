# Contributing to Life Goals Tracker

First off, thank you for considering contributing to Life Goals Tracker! 🎉 It's people like you that make Life Goals Tracker such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [CSS Style Guide](#css-style-guide)
- [Development Setup](#development-setup)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**Before Submitting A Bug Report:**
- Check the documentation
- Check if the issue has already been reported
- Check if the issue has been fixed in a newer version
- Perform a search to see if the enhancement has already been suggested

**How to Submit A Good Bug Report:**

Bugs are tracked as [GitHub issues](https://github.com/23f3004176/life-goals-tracker/issues). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue
- **Describe the exact steps to reproduce the problem** in as much detail as possible
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** after following the steps
- **Explain which behavior you expected to see instead** and why
- **Include screenshots or animated GIFs** if possible
- **Include your environment details** (OS, browser version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/23f3004176/life-goals-tracker/issues). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue
- **Provide a detailed description** of the suggested enhancement
- **Provide specific examples** to demonstrate the use case
- **Describe the current behavior** and explain which behavior you expected to see instead
- **Explain why this enhancement would be useful** to most Life Goals Tracker users
- **List some other applications where this enhancement exists** (if applicable)

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these issues:

- **Beginner issues** - issues which should only require a few lines of code
- **Help wanted issues** - issues which should be a bit more involved than beginner issues

### Pull Requests

The process described here has several goals:

- Maintain Life Goals Tracker's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Life Goals Tracker
- Enable a sustainable system for maintainers to review contributions

**Please follow these steps:**

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the style guides
   - Add tests if applicable
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm test
   npm start
   ```

4. **Commit your changes** with a descriptive commit message
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Fill in the required template
   - Link any related issues
   - Request review from maintainers

## Style Guides

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation only changes
- **style:** Changes that don't affect the meaning of the code (formatting, etc.)
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **perf:** A code change that improves performance
- **test:** Adding missing tests or correcting existing tests
- **chore:** Changes to the build process or auxiliary tools

**Examples:**
```
feat: add goal category filtering
fix: resolve authentication timeout issue
docs: update installation instructions
style: format code with Prettier
refactor: simplify goal creation logic
perf: optimize database queries
test: add tests for user authentication
chore: update dependencies
```

### JavaScript Style Guide

- Use **ES6+** syntax
- Use **functional components** with hooks for React
- Use **arrow functions** for consistency
- Use **const** and **let** instead of **var**
- Use **meaningful variable names**
- Add **comments** for complex logic
- Keep functions **small and focused**
- Follow **DRY principle** (Don't Repeat Yourself)

**Example:**
```javascript
// Good
const calculateProgress = (completed, total) => {
  return (completed / total) * 100;
};

// Bad
function calc(c, t) {
  return c / t * 100;
}
```

### CSS Style Guide

- Use **BEM naming convention** or **CSS modules**
- Use **mobile-first** approach
- Group related properties together
- Use **meaningful class names**
- Avoid **!important** unless absolutely necessary
- Use **CSS variables** for colors and common values

**Example:**
```css
/* Good */
.goal-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 8px;
}

/* Bad */
.gc {
  display: flex !important;
  padding: 16px;
  background: #fff;
}
```

## Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/life-goals-tracker.git
   cd life-goals-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env` file in the root directory
   - Add your Firebase configuration
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## Testing

Before submitting your pull request, make sure all tests pass:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

- Write tests for new features
- Update tests for modified features
- Aim for high test coverage
- Test edge cases and error scenarios

**Example:**
```javascript
import { render, screen } from '@testing-library/react';
import GoalCard from './GoalCard';

test('renders goal title', () => {
  const goal = { title: 'Learn React', progress: 50 };
  render(<GoalCard goal={goal} />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
```

## Recognition

Contributors will be recognized in the following ways:

- **Listed in the README** with links to their GitHub profiles
- **Mentioned in release notes** for significant contributions
- **Given credit** in commit messages and pull requests

## Questions?

If you have any questions, please feel free to:

- Open an issue with the `question` label
- Start a discussion in [GitHub Discussions](https://github.com/23f3004176/life-goals-tracker/discussions)
- Reach out to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Life Goals Tracker! 🚀🌟
