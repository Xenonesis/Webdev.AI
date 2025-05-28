# ThunderDev API Documentation ⚡

## 🌟 Overview

ThunderDev provides a RESTful API that powers the AI-driven website builder. The API handles AI interactions, template generation, and project management through Google Gemini 2.0 Flash integration.

## 📋 Table of Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Rate Limiting](#rate-limiting)
- [API Endpoints](#api-endpoints)
- [Request/Response Format](#requestresponse-format)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [SDKs & Libraries](#sdks--libraries)

## 🌐 Base URL

```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

## 🔐 Authentication

The API uses API key authentication for Google AI services. No authentication is required for the frontend-backend communication in the current version.

### Environment Variables
```bash
GOOGLE_API_KEY=your_google_ai_api_key
PORT=3000
NODE_ENV=development
```

## ⚡ Rate Limiting

- **Development**: No rate limiting
- **Production**: 100 requests per minute per IP
- **AI Endpoints**: 10 requests per minute per IP

## 🛠️ API Endpoints

### 🤖 AI Chat Endpoints

#### POST `/api/chat`
Generate AI responses for website building conversations.

**Request Body:**
```json
{
  "message": "Create a modern portfolio website with dark theme",
  "context": "react",
  "history": []
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "I'll help you create a modern portfolio website...",
    "suggestions": ["Add contact form", "Include project gallery"],
    "templateType": "react"
  }
}
```

#### POST `/api/generate`
Generate complete website templates based on AI prompts.

**Request Body:**
```json
{
  "prompt": "Create a restaurant website with menu and reservations",
  "templateType": "react",
  "features": ["menu", "reservations", "gallery"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "files": {
      "src/App.tsx": "import React from 'react'...",
      "src/components/Menu.tsx": "export const Menu = () => ...",
      "package.json": "{ \"name\": \"restaurant-site\" ..."
    },
    "structure": {
      "type": "react",
      "dependencies": ["react", "react-dom", "tailwindcss"],
      "scripts": {
        "dev": "vite",
        "build": "vite build"
      }
    }
  }
}
```

### 📁 Template Endpoints

#### GET `/api/templates`
Retrieve available website templates.

**Query Parameters:**
- `type`: Template type (`react`, `node`, `static`)
- `category`: Template category (`portfolio`, `business`, `blog`)
- `limit`: Number of templates to return (default: 10)

**Response:**
```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "id": "modern-portfolio",
        "name": "Modern Portfolio",
        "description": "Clean, responsive portfolio template",
        "type": "react",
        "category": "portfolio",
        "preview": "https://example.com/preview.png",
        "features": ["responsive", "dark-mode", "animations"]
      }
    ],
    "total": 25,
    "page": 1
  }
}
```

#### GET `/api/templates/:id`
Get specific template details and files.

**Response:**
```json
{
  "success": true,
  "data": {
    "template": {
      "id": "modern-portfolio",
      "name": "Modern Portfolio",
      "files": {
        "src/App.tsx": "...",
        "package.json": "..."
      },
      "structure": {
        "type": "react",
        "dependencies": [],
        "scripts": {}
      }
    }
  }
}
```

### 🔧 Project Management

#### POST `/api/projects`
Create a new project from template or AI generation.

**Request Body:**
```json
{
  "name": "My Awesome Website",
  "template": "modern-portfolio",
  "customizations": {
    "theme": "dark",
    "primaryColor": "#3b82f6"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "projectId": "proj_abc123",
    "name": "My Awesome Website",
    "files": {},
    "createdAt": "2025-05-28T10:00:00Z"
  }
}
```

#### GET `/api/projects/:id`
Retrieve project details and files.

#### PUT `/api/projects/:id`
Update project files and configuration.

#### DELETE `/api/projects/:id`
Delete a project.

### 📦 Package Management

#### POST `/api/packages/install`
Install npm packages in a project.

**Request Body:**
```json
{
  "projectId": "proj_abc123",
  "packages": ["axios", "react-router-dom"],
  "dev": false
}
```

#### GET `/api/packages/search`
Search for npm packages.

**Query Parameters:**
- `q`: Search query
- `limit`: Number of results (default: 10)

## 📝 Request/Response Format

### Request Headers
```
Content-Type: application/json
Accept: application/json
```

### Response Format
All API responses follow this structure:

```json
{
  "success": boolean,
  "data": object | array,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  },
  "meta": {
    "timestamp": "2025-05-28T10:00:00Z",
    "version": "0.10.0",
    "requestId": "req_abc123"
  }
}
```

## ❌ Error Handling

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error
- `503` - Service Unavailable

### Error Response Example
```json
{
  "success": false,
  "error": {
    "code": "INVALID_TEMPLATE_TYPE",
    "message": "The specified template type is not supported",
    "details": {
      "supportedTypes": ["react", "node", "static"],
      "provided": "vue"
    }
  },
  "meta": {
    "timestamp": "2025-05-28T10:00:00Z",
    "requestId": "req_error123"
  }
}
```

### Common Error Codes
- `INVALID_REQUEST` - Malformed request body
- `MISSING_REQUIRED_FIELD` - Required field not provided
- `INVALID_TEMPLATE_TYPE` - Unsupported template type
- `AI_SERVICE_ERROR` - Google AI API error
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `PROJECT_NOT_FOUND` - Project doesn't exist
- `TEMPLATE_NOT_FOUND` - Template doesn't exist

## 💡 Examples

### Generate a React Portfolio Site

```javascript
// Request
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'Create a portfolio website for a web developer with dark theme',
    templateType: 'react',
    features: ['portfolio', 'blog', 'contact']
  })
});

const data = await response.json();
console.log(data.data.files);
```

### Chat with AI Assistant

```javascript
// Request
const chatResponse = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'How do I add a contact form to my website?',
    context: 'react',
    history: [
      { role: 'user', content: 'I want to build a portfolio site' },
      { role: 'assistant', content: 'I can help you create a portfolio...' }
    ]
  })
});

const chatData = await chatResponse.json();
console.log(chatData.data.response);
```

### Search and Install Packages

```javascript
// Search packages
const searchResponse = await fetch('/api/packages/search?q=react-router&limit=5');
const packages = await searchResponse.json();

// Install package
const installResponse = await fetch('/api/packages/install', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    projectId: 'proj_abc123',
    packages: ['react-router-dom'],
    dev: false
  })
});
```

## 📚 SDKs & Libraries

### JavaScript/TypeScript SDK

```bash
npm install thunderdev-sdk
```

```javascript
import { ThunderDevAPI } from 'thunderdev-sdk';

const api = new ThunderDevAPI({
  baseURL: 'http://localhost:3000/api'
});

// Generate template
const template = await api.generate({
  prompt: 'Create a blog website',
  templateType: 'react'
});

// Chat with AI
const response = await api.chat({
  message: 'Add a search feature',
  context: 'react'
});
```

### Python SDK (Coming Soon)

```python
from thunderdev import ThunderDevAPI

api = ThunderDevAPI(base_url='http://localhost:3000/api')
template = api.generate(
    prompt='Create a blog website',
    template_type='react'
)
```

## 🔧 Development

### Running the API Locally

```bash
# Clone repository
git clone https://github.com/Xenonesis/Webdev.AI.git
cd Webdev.AI

# Install dependencies
npm run install:all

# Set up environment
cp thunder/be/.env.example thunder/be/.env
# Add your GOOGLE_API_KEY

# Start development server
npm run dev:backend
```

### API Testing

```bash
# Run API tests
cd thunder/be
npm test

# Test specific endpoint
npm run test:api
```

## 📞 Support

For API support and questions:
- 📚 **Documentation**: [README.md](README.md)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Xenonesis/Webdev.AI/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Xenonesis/Webdev.AI/discussions)
- 📧 **Contact**: [Aditya](https://github.com/Xenonesis) | [Muneer Ali](https://github.com/Muneerali199)

---

## 🚀 WebSocket API (Real-time Features)

### Connection
```javascript
const ws = new WebSocket('ws://localhost:3000/ws');

ws.onopen = () => {
  console.log('Connected to ThunderDev WebSocket');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};
```

### Events
- `project:update` - Real-time project file changes
- `ai:thinking` - AI processing status updates
- `build:status` - Build process updates
- `collaboration:cursor` - Real-time cursor positions

## 🔄 Webhooks (Coming Soon)

### Project Events
- `project.created`
- `project.updated`
- `project.deployed`
- `ai.generation.completed`

### Configuration
```json
{
  "url": "https://your-app.com/webhooks/thunderdev",
  "events": ["project.created", "project.deployed"],
  "secret": "your_webhook_secret"
}
```

## 📊 Analytics API (Coming Soon)

### Usage Metrics
```javascript
GET /api/analytics/usage
{
  "projects_created": 150,
  "ai_generations": 1250,
  "templates_used": 75,
  "active_users": 45
}
```

## 🔧 Advanced Configuration

### Custom AI Models
```json
{
  "aiConfig": {
    "model": "gemini-2.0-flash",
    "temperature": 0.7,
    "maxTokens": 2048,
    "customPrompts": {
      "react": "Create a modern React component...",
      "node": "Generate a Node.js API endpoint..."
    }
  }
}
```

### Template Customization
```json
{
  "templateConfig": {
    "defaultTheme": "dark",
    "customCSS": "/* Custom styles */",
    "features": {
      "analytics": true,
      "seo": true,
      "pwa": false
    }
  }
}
```

---

**API Version**: 0.15.0
**Last Updated**: May 28, 2025
**Repository**: [https://github.com/Xenonesis/Webdev.AI](https://github.com/Xenonesis/Webdev.AI)
**License**: MIT
