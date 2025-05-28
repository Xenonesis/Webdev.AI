// API Configuration
export const API_CONFIG = {
  BACKEND_URL: "https://website-builder-backend-ws9k.onrender.com",
  TIMEOUT: 10000,
} as const;

// Application Constants
export const APP_CONFIG = {
  NAME: "ThunderDev",
  VERSION: "1.0.0",
  DESCRIPTION: "A modern, intuitive website builder with drag-and-drop functionality",
} as const;

// UI Constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

// Animation Constants
export const ANIMATIONS = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_OUT: [0.6, -0.05, 0.01, 0.99],
    SPRING: { type: 'spring', stiffness: 200, damping: 30 },
  },
} as const;

// File Upload Constants
export const FILE_UPLOAD = {
  ACCEPTED_TYPES: ['.jpg', '.png', '.pdf', '.doc', '.md'],
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
} as const;

// Recommendation Prompts
export const RECOMMENDATION_PROMPTS = [
  'Design a futuristic portfolio for my digital art',
  'Create an online store for sustainable fashion',
  'Build a tech blog with interactive demos',
  'Make a vibrant landing page for my app',
] as const;

// Routes
export const ROUTES = {
  HOME: '/',
  BUILDER: '/builder',
  GITHUB_CALLBACK: '/github-callback',
} as const;
