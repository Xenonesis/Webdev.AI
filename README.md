# ThunderDev ⚡ - AI-Powered Website Builder

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/website?down_color=red&down_message=Offline&label=Demo&up_color=blue&up_message=Live&url=https%3A%2F%2Fwebdev-ai.vercel.app)](https://webdev-ai.vercel.app)
![Version](https://img.shields.io/badge/version-0.10(beta)-blue)
![Release Date](https://img.shields.io/badge/release-28%20May%202025-brightgreen)
![Maintained](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange)

A modern, intuitive **AI-powered website builder** with drag-and-drop functionality and intelligent code generation, empowering users to create professional websites in minutes using cutting-edge AI technology.

![ThunderDev Interface](https://raw.githubusercontent.com/Xenonesis/Webdev.AI/main/public/assets/sc.png)

---

## 🌟 Table of Contents 📚
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Authors](#-authors--contributors)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

**ThunderDev** is a revolutionary AI-powered website builder that combines the power of modern web technologies with cutting-edge artificial intelligence. Built with React, TypeScript, and powered by Google's Gemini 2.0 Flash AI, it enables developers and designers to create professional websites through natural language interactions and intelligent code generation.

### 🚀 What Makes ThunderDev Special?

- **🤖 AI-First Approach**: Chat with AI to generate complete websites, components, and features
- **⚡ Lightning Fast**: Built on Vite for instant hot reload and optimal development experience
- **🎨 Visual + Code**: Perfect blend of drag-and-drop interface and powerful code editor
- **🌐 Full-Stack Ready**: Integrated backend and frontend with seamless collaboration
- **📱 Modern Stack**: React 18, TypeScript, Tailwind CSS, and WebContainer API

### 🎪 Live Demo
Experience ThunderDev in action: [https://webdev-ai.vercel.app](https://webdev-ai.vercel.app)

### 🏗️ Project Structure
```
ThunderDev/
├── 🎨 Frontend (React + Vite)
│   ├── AI Chat Interface
│   ├── Visual Website Builder
│   ├── Monaco Code Editor
│   └── Live Preview System
├── 🔧 Backend (Node.js + Express)
│   ├── Google Gemini AI Integration
│   ├── Template Generation API
│   └── Real-time Chat Processing
└── 🛠️ Development Tools
    ├── Automated Setup Scripts
    ├── Cross-platform Support
    └── Unified Package Management
```

---

## ✨ Features

### 🤖 AI-Powered Core
- 🧠 **AI Code Generation** - Powered by Google Gemini 2.0 Flash for intelligent code creation
- 💬 **Smart Chat Assistant** - Interactive AI that understands your project requirements
- 🎯 **Intelligent Template Selection** - AI automatically suggests React or Node.js based on your needs
- ⚡ **Real-time Code Assistance** - Get instant help and suggestions while building

### 🚀 Core Functionality
- 🖱️ **Drag-and-Drop Builder** - Intuitive visual editor for seamless website creation
- 🎨 **Template Gallery** - Choose from responsive templates tailored for various industries
- 📱 **Cross-Device Preview** - Real-time simulation across devices with WebContainer API
- 🌈 **Advanced Code Editor** - Monaco Editor with syntax highlighting and IntelliSense
- 🔧 **Live Preview** - Instant preview of your changes with hot reload

### 🛠️ Development Features
- 📁 **File Explorer** - Complete project file management system
- 🖥️ **Integrated Terminal** - Built-in terminal for package management and commands
- 📦 **Package Management** - Easy dependency installation and management
- 🔄 **Version Control** - Git integration for project versioning
- 💾 **Export Projects** - Download your complete project as ZIP

### 🔧 Advanced Features
- 🌍 **One-Click Deployment** - Deploy to Vercel, Netlify, or custom domains
- 🤝 **Team Collaboration** - Real-time collaborative editing
- 🕒 **Project History** - Rollback to any previous version with ease
- 📊 **Analytics Integration** - Monitor performance and usage statistics
- 🎨 **Theme Customization** - Tailwind CSS integration with custom styling

---

## 💻 Tech Stack

| 💡 Category       | 🔧 Technologies                                    |
|-------------------|----------------------------------------------------|
| **Frontend**      | React 18, Vite, TypeScript, Tailwind CSS         |
| **Backend**       | Node.js, Express, TypeScript                      |
| **AI/ML**         | Google Gemini 2.0 Flash, Groq SDK                |
| **Code Editor**   | Monaco Editor, WebContainer API                   |
| **UI/UX**         | Framer Motion, Lucide Icons, Heroicons           |
| **Development**   | Vite, ESLint, PostCSS, Concurrently             |
| **Deployment**    | Vercel, Render, Netlify                          |
| **Package Mgmt**  | npm, Workspaces                                   |

---

## 🛠️ Installation

### Prerequisites
- **Node.js** v18+ installed on your system
- **Google Generative AI API Key** (get from [Google AI Studio](https://makersuite.google.com/app/apikey))

### 🚀 Quick Start (Automated Setup)
```bash
# Clone the repository
git clone https://github.com/Xenonesis/Webdev.AI.git
cd Webdev.AI

# Run automated setup
node setup.js

# Add your Google API key to thunder/be/.env
# Then start the development servers
npm run dev
```

### 📋 Manual Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Xenonesis/Webdev.AI.git
   cd Webdev.AI
   ```

2. **Install all dependencies**:
   ```bash
   npm run install:all
   ```

3. **Configure environment**:
   ```bash
   cp thunder/be/.env.example thunder/be/.env
   # Edit thunder/be/.env and add your GOOGLE_API_KEY
   ```

4. **Build the backend**:
   ```bash
   npm run build:backend
   ```

5. **Start development servers**:
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API server on [http://localhost:3000](http://localhost:3000)
   - Frontend development server on [http://localhost:5173](http://localhost:5173)

### 🌐 Access the Application
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Usage

### 🔧 Available Commands

#### Development
```bash
npm run dev              # Start both frontend and backend in development mode
npm run dev:frontend     # Start only frontend (Vite dev server)
npm run dev:backend      # Start only backend (Express server)
```

#### Building
```bash
npm run build            # Build both frontend and backend for production
npm run build:frontend   # Build only frontend
npm run build:backend    # Build only backend (TypeScript compilation)
```

#### Production
```bash
npm run start            # Start both frontend and backend in production mode
npm run start:frontend   # Start frontend preview server
npm run start:backend    # Start backend production server
```

#### Utilities
```bash
npm run setup            # Complete setup (install deps + create env file)
npm run install:all      # Install all dependencies
npm run clean            # Clean all build artifacts and node_modules
```

---

## 🤝 Contributing

We welcome contributions! To get started:

1. **Fork the repository**:
   ```bash
   git clone https://github.com/Xenonesis/Webdev.AI.git
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your changes**:
   ```bash
   git commit -m 'Add AmazingFeature'
   ```

4. **Push to your branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**.

### Contribution Guidelines
For detailed steps, see our [Contribution Guidelines](CONTRIBUTING.md).

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 💬 Support

For help or feature requests:
- 🐞 Open an [Issue](https://github.com/Xenonesis/Webdev.AI/issues)
- 💬 Join our community discussions
- 📧 Contact the maintainers through GitHub

## 🆘 Troubleshooting

### Common Issues
- **"Cannot find module" errors**: Run `npm run clean && npm run install:all`
- **Backend not starting**: Check if `.env` file exists with `GOOGLE_API_KEY`
- **Frontend not connecting**: Ensure backend is running on port 3000
- **Port conflicts**: Change `PORT` in `thunder/be/.env` for backend

### Getting Help
1. Check the [QUICK_START.md](QUICK_START.md) guide
2. Search existing [issues](https://github.com/Xenonesis/Webdev.AI/issues)
3. Create a new issue with detailed information

---

## 👥 Authors & Contributors

Crafted with ❤️ by:

- **[Aditya](https://github.com/Xenonesis)** - Lead Developer & Project Maintainer
- **[Muneer Ali](https://github.com/Muneerali199)** - Core Developer & AI Integration

### 🙏 Acknowledgments
- Google Gemini team for the powerful AI API
- React and Vite communities for excellent tooling
- All contributors who help improve this project

---

## 📋 Project Information

- **Version**: 0.10 (Beta)
- **Release Date**: 28 May 2025
- **License**: MIT
- **Repository**: [https://github.com/Xenonesis/Webdev.AI](https://github.com/Xenonesis/Webdev.AI)

Report Bug: [Issues](https://github.com/Xenonesis/Webdev.AI/issues) | Request Feature: [Discussions](https://github.com/Xenonesis/Webdev.AI/discussions)
