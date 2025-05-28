# Netlify Deployment Troubleshooting Guide 🚀

This guide helps resolve common Netlify deployment issues for ThunderDev.

## 🔧 Fixed Issues

### ✅ netlify.toml Parsing Error (RESOLVED)
**Issue**: "Error parsing netlify.toml configuration file"  
**Solution**: Simplified TOML syntax and removed problematic configurations

**Fixed Configuration**:
```toml
[build]
command = "npm run build:frontend"
publish = "thunder/frontend/dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## 🛠️ Alternative Build Commands

If the default build fails, try these alternatives in Netlify dashboard:

### Option 1: Simple Build
```bash
cd thunder/frontend && npm run build
```

### Option 2: With Full Install
```bash
npm install && npm run build:frontend
```

### Option 3: Direct Vite Build
```bash
cd thunder/frontend && npm install && npx vite build
```

### Option 4: Force Optional Dependencies
```bash
cd thunder/frontend && npm install --include=optional && npm run build
```

## 📋 Netlify Dashboard Settings

### Build Settings
- **Build command**: `npm run build:frontend`
- **Publish directory**: `thunder/frontend/dist`
- **Base directory**: (leave empty)

### Environment Variables
```
NODE_VERSION=18
NPM_CONFIG_INCLUDE=optional
```

### Advanced Build Settings
- **Build image**: Ubuntu Focal 20.04 (default)
- **Node.js version**: 18 (set via NODE_VERSION)

## 🔍 Common Issues & Solutions

### Issue 1: Module Not Found Errors
**Symptoms**: `Cannot find module '@rollup/rollup-linux-x64-gnu'`
**Solution**: 
- Ensure `@rollup/rollup-linux-x64-gnu` is in devDependencies
- Use `npm install --include=optional` in build command

### Issue 2: Build Command Not Found
**Symptoms**: `npm run build:frontend: command not found`
**Solution**:
- Check package.json has the script defined
- Use absolute path: `cd thunder/frontend && npm run build`

### Issue 3: Wrong Publish Directory
**Symptoms**: Site deploys but shows 404
**Solution**:
- Verify publish directory is `thunder/frontend/dist`
- Check that Vite builds to `dist` folder

### Issue 4: Node.js Version Issues
**Symptoms**: Build fails with Node.js compatibility errors
**Solution**:
- Set NODE_VERSION=18 in environment variables
- Ensure package.json engines specifies Node 18+

## 🚀 Manual Deployment Steps

If automatic deployment fails:

1. **Local Build Test**:
   ```bash
   cd thunder/frontend
   npm install --include=optional
   npm run build
   ```

2. **Manual Deploy**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy manually
   cd thunder/frontend
   netlify deploy --prod --dir=dist
   ```

## 📊 Build Logs Analysis

### Successful Build Indicators
- ✅ `npm packages installed`
- ✅ `vite build completed`
- ✅ `Site deploy completed`

### Error Patterns to Look For
- ❌ `Error parsing netlify.toml` → Fix TOML syntax
- ❌ `Module not found` → Check dependencies
- ❌ `Build script failed` → Verify package.json scripts
- ❌ `Publish directory not found` → Check build output

## 🔄 Alternative Configurations

### netlify-alternative.toml
Use this if main configuration fails:
```toml
[build]
command = "npm install && cd thunder/frontend && npm install --include=optional && npm run build"
publish = "thunder/frontend/dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### Minimal Configuration
For testing purposes:
```toml
[build]
command = "cd thunder/frontend && npx vite build"
publish = "thunder/frontend/dist"
```

## 🌐 Other Deployment Options

If Netlify continues to have issues:

### Vercel Deployment
```bash
npm i -g vercel
cd thunder/frontend
vercel --prod
```

### GitHub Pages
Use the workflow in `.github/workflows/deploy.yml`

### Railway
Connect GitHub repo and set:
- Build command: `npm run build:frontend`
- Start command: `npm run start:frontend`

## 📞 Getting Help

### Netlify Support
- Check [Netlify Status](https://www.netlifystatus.com/)
- Review [Netlify Docs](https://docs.netlify.com/)
- Contact Netlify Support if platform issues

### Project Support
- 🐛 [Report Issues](https://github.com/Xenonesis/Webdev.AI/issues)
- 💬 [GitHub Discussions](https://github.com/Xenonesis/Webdev.AI/discussions)
- 📧 Contact: [Aditya](https://github.com/Xenonesis) | [Muneer Ali](https://github.com/Muneerali199)

## ✅ Verification Checklist

Before deploying, ensure:
- [ ] netlify.toml syntax is valid
- [ ] Build command exists in package.json
- [ ] Publish directory path is correct
- [ ] Node.js version is specified
- [ ] Dependencies include optional packages
- [ ] Local build works successfully

---

**Last Updated**: May 28, 2025  
**Repository**: [https://github.com/Xenonesis/Webdev.AI](https://github.com/Xenonesis/Webdev.AI)  
**Version**: 0.15.1
