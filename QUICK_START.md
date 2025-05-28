# 🚀 ThunderDev Quick Start Guide
**Version 0.10 (Beta) - 28 May 2025**

## ⚡ Super Quick Start (Windows)
1. Clone: `git clone https://github.com/Xenonesis/Webdev.AI.git`
2. Double-click `start.bat`
3. Follow the prompts
4. Add your Google API key when prompted
5. Done! 🎉

## 🐧 Quick Start (Linux/Mac)
```bash
# Clone the repository
git clone https://github.com/Xenonesis/Webdev.AI.git
cd Webdev.AI

# Run the automated setup
node setup.js

# Add your Google API key to thunder/be/.env
# Then start development
npm run dev
```

## 🔑 Getting Your Google API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key
4. Paste it in `thunder/be/.env` file:
   ```
   GOOGLE_API_KEY=your_actual_api_key_here
   ```

## 🌐 Access Points
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## 🛠️ Useful Commands
```bash
npm run dev              # Start both servers
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only
npm run build            # Build for production
npm run clean            # Clean everything
```

## 🔧 Project Structure
```
thunder-main/
├── thunder/
│   ├── frontend/        # React + Vite frontend
│   └── be/             # Node.js + Express backend
├── package.json        # Root package with unified scripts
├── setup.js           # Automated setup script
├── start.bat          # Windows quick start
└── README.md          # Detailed documentation
```

## 🆘 Troubleshooting

### "Cannot find module" errors
```bash
npm run clean
npm run install:all
```

### Backend not starting
1. Check if you have a `.env` file in `thunder/be/`
2. Make sure `GOOGLE_API_KEY` is set
3. Try rebuilding: `npm run build:backend`

### Frontend not connecting to backend
1. Make sure backend is running on port 3000
2. Check browser console for CORS errors
3. Verify `thunder/frontend/src/config.ts` points to correct URL

### Port already in use
- Backend (3000): Change `PORT` in `thunder/be/.env`
- Frontend (5173): Vite will automatically use next available port

## 🎯 What's New in This Setup
- ✅ Unified package.json with all scripts
- ✅ Automatic local/production backend switching
- ✅ Fixed duplicate API endpoints
- ✅ Environment file template
- ✅ Cross-platform setup scripts
- ✅ Comprehensive documentation

## 🚀 Next Steps
1. Explore the codebase
2. Make your first changes
3. Test the AI-powered features
4. Build something amazing! 

Happy coding! 🎉
