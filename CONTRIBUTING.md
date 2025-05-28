# Contributing to ThunderDev ⚡

Thank you for your interest in contributing to ThunderDev! We welcome contributions from developers of all skill levels. This guide will help you get started with contributing to our AI-powered website builder.

## 🌟 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## 📋 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ 
- Git
- Google Generative AI API Key
- Basic knowledge of React, TypeScript, and Node.js

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Webdev.AI.git
   cd Webdev.AI
   ```

3. **Add the original repository as upstream**:
   ```bash
   git remote add upstream https://github.com/Xenonesis/Webdev.AI.git
   ```

4. **Install dependencies**:
   ```bash
   npm run install:all
   ```

5. **Set up environment**:
   ```bash
   cp thunder/be/.env.example thunder/be/.env
   # Add your GOOGLE_API_KEY to thunder/be/.env
   ```

6. **Start development servers**:
   ```bash
   npm run dev
   ```

## 🤝 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- 🐛 **Bug Reports**: Help us identify and fix issues
- ✨ **Feature Requests**: Suggest new features or improvements
- 💻 **Code Contributions**: Submit bug fixes or new features
- 📚 **Documentation**: Improve our docs, guides, and examples
- 🎨 **Design**: UI/UX improvements and design suggestions
- 🧪 **Testing**: Add or improve test coverage

### Before You Start

1. **Check existing issues** to avoid duplicating work
2. **Create an issue** for major changes to discuss the approach
3. **Start small** with your first contribution
4. **Ask questions** if you're unsure about anything

## 🔄 Pull Request Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow our coding standards
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Test both frontend and backend
npm run dev
```

### 4. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add new AI template generation feature"
git commit -m "fix: resolve WebContainer API connection issue"
git commit -m "docs: update installation instructions"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Reference to related issues
- Screenshots for UI changes
- Testing instructions

### 6. Code Review Process

- Maintainers will review your PR
- Address feedback promptly
- Keep your branch updated with main
- Be patient and respectful during review

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

```typescript
/**
 * Generates AI-powered website template
 * @param prompt - User's natural language description
 * @param templateType - Type of template (react/node)
 * @returns Generated template configuration
 */
export async function generateTemplate(
  prompt: string, 
  templateType: TemplateType
): Promise<TemplateConfig> {
  // Implementation
}
```

### React Components

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow component naming conventions

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### CSS/Styling

- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors

## 🧪 Testing Guidelines

### Frontend Testing

```bash
# Run frontend tests
cd thunder/frontend
npm test
```

### Backend Testing

```bash
# Run backend tests
cd thunder/be
npm test
```

### Test Requirements

- Unit tests for utility functions
- Integration tests for API endpoints
- Component tests for React components
- E2E tests for critical user flows

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and classes
- Include usage examples in documentation
- Keep README.md updated with new features

### API Documentation

- Document all API endpoints
- Include request/response examples
- Update API.md for changes

## 🏷️ Issue Labels

We use these labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - Critical issues
- `priority: low` - Nice to have

## 🌍 Community

### Getting Help

- 💬 **GitHub Discussions**: Ask questions and share ideas
- 🐛 **Issues**: Report bugs and request features
- 📧 **Email**: Contact maintainers directly

### Recognition

Contributors will be:
- Added to our contributors list
- Mentioned in release notes
- Invited to our contributor Discord (coming soon)

## 📋 Checklist for Contributors

Before submitting your PR, ensure:

- [ ] Code follows our style guidelines
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] PR description explains the changes
- [ ] No merge conflicts with main branch

## 🙏 Thank You

Every contribution, no matter how small, helps make ThunderDev better. We appreciate your time and effort in improving this project!

---

**Questions?** Feel free to reach out to our maintainers:
- [Aditya](https://github.com/Xenonesis)
- [Muneer Ali](https://github.com/Muneerali199)

Happy coding! ⚡
