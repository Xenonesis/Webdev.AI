# Deployment Guide ⚡

This guide covers deploying ThunderDev to various platforms including Netlify, Vercel, and other hosting providers.

## 🌐 Netlify Deployment

### Quick Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Xenonesis/Webdev.AI)

### Manual Deployment

1. **Fork/Clone the repository**
2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the `Webdev.AI` repository

3. **Build Settings**:
   - **Build command**: `npm run build:frontend`
   - **Publish directory**: `thunder/frontend/dist`
   - **Node version**: `18` (set in Environment variables)

4. **Environment Variables**:
   ```
   NODE_VERSION=18
   NPM_FLAGS=--include=optional
   ```

### Troubleshooting Netlify

#### Rollup Module Issues
If you encounter `Cannot find module @rollup/rollup-linux-x64-gnu`:

1. The `netlify.toml` file should handle this automatically
2. Ensure `.npmrc` files are committed to the repository
3. Check that `@rollup/rollup-linux-x64-gnu` is in `optionalDependencies`

#### Build Failures
- Check the build logs for specific error messages
- Ensure all dependencies are properly listed in `package.json`
- Verify the Node.js version is set to 18

## 🔺 Vercel Deployment

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Xenonesis/Webdev.AI)

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   cd thunder/frontend
   vercel --prod
   ```

3. **Configuration** (vercel.json):
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite",
     "installCommand": "npm ci --include=optional"
   }
   ```

## 🐳 Docker Deployment

### Frontend Only
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY thunder/frontend/package*.json ./
RUN npm ci --include=optional

COPY thunder/frontend/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Full Stack
```dockerfile
# Multi-stage build
FROM node:18-alpine as frontend
WORKDIR /app/frontend
COPY thunder/frontend/package*.json ./
RUN npm ci --include=optional
COPY thunder/frontend/ ./
RUN npm run build

FROM node:18-alpine as backend
WORKDIR /app/backend
COPY thunder/be/package*.json ./
RUN npm ci
COPY thunder/be/ ./
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app/backend/dist ./backend
COPY --from=frontend /app/frontend/dist ./frontend
COPY thunder/be/package*.json ./
RUN npm ci --production

EXPOSE 3000
CMD ["node", "backend/index.js"]
```

## 🌍 Other Platforms

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci --include=optional
        working-directory: thunder/frontend
      - run: npm run build
        working-directory: thunder/frontend
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: thunder/frontend/dist
```

### Railway
1. Connect your GitHub repository
2. Set build command: `npm run build:frontend`
3. Set start command: `npm run start:frontend`
4. Set root directory: `/`

### Render
1. Connect your GitHub repository
2. **Build Command**: `npm run build:frontend`
3. **Publish Directory**: `thunder/frontend/dist`
4. **Environment**: Node.js

## 🔧 Build Optimization

### Performance Tips
1. **Enable Gzip compression** on your hosting platform
2. **Set proper cache headers** for static assets
3. **Use CDN** for better global performance
4. **Optimize images** before deployment

### Bundle Analysis
```bash
cd thunder/frontend
npm run build -- --analyze
```

## 🔒 Environment Variables

### Frontend Environment Variables
Create `.env` files for different environments:

```bash
# .env.production
VITE_API_URL=https://your-api-domain.com
VITE_APP_NAME=ThunderDev
```

### Security Considerations
- Never commit API keys to the repository
- Use environment variables for sensitive data
- Enable HTTPS on production deployments
- Set proper CORS headers

## 📊 Monitoring & Analytics

### Recommended Tools
- **Netlify Analytics**: Built-in analytics for Netlify deployments
- **Vercel Analytics**: Performance monitoring for Vercel
- **Google Analytics**: User behavior tracking
- **Sentry**: Error monitoring and performance tracking

## 🚀 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy ThunderDev
on:
  push:
    branches: [ master ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci --include=optional
        working-directory: thunder/frontend
      - run: npm run build
        working-directory: thunder/frontend
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './thunder/frontend/dist'
          production-branch: master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📞 Support

For deployment issues:
- 📚 Check the [README.md](README.md) for basic setup
- 🐛 [Report Issues](https://github.com/Xenonesis/Webdev.AI/issues)
- 💬 [Join Discussions](https://github.com/Xenonesis/Webdev.AI/discussions)

---

**Last Updated**: May 28, 2025  
**Repository**: [https://github.com/Xenonesis/Webdev.AI](https://github.com/Xenonesis/Webdev.AI)  
**License**: MIT
