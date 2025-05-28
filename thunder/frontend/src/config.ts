// Backend URL configuration
// In development, use local backend. In production, use remote backend.
export const BACKEND_URL = process.env.NODE_ENV === 'production'
  ? "https://website-builder-backend-ws9k.onrender.com"
  : "http://localhost:3000";
