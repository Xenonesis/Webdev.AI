@echo off
echo 🚀 Starting ThunderDev...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v18+ from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
)

if not exist "thunder\be\node_modules" (
    echo 📦 Installing backend dependencies...
    call npm install --prefix thunder\be
    if %errorlevel% neq 0 (
        echo ❌ Failed to install backend dependencies
        pause
        exit /b 1
    )
)

if not exist "thunder\frontend\node_modules" (
    echo 📦 Installing frontend dependencies...
    call npm install --prefix thunder\frontend
    if %errorlevel% neq 0 (
        echo ❌ Failed to install frontend dependencies
        pause
        exit /b 1
    )
)

REM Check if .env file exists
if not exist "thunder\be\.env" (
    echo 🔧 Creating .env file...
    copy "thunder\be\.env.example" "thunder\be\.env"
    echo.
    echo ⚠️  Please edit thunder\be\.env and add your Google API key
    echo    Get your API key from: https://makersuite.google.com/app/apikey
    echo.
    pause
)

REM Build backend
echo 🔨 Building backend...
call npm run build:backend
if %errorlevel% neq 0 (
    echo ❌ Failed to build backend
    pause
    exit /b 1
)

echo.
echo ✅ Setup complete! Starting development servers...
echo.
echo 🌐 Frontend will be available at: http://localhost:5173
echo 🔧 Backend API will be available at: http://localhost:3000
echo.

REM Start development servers
call npm run dev
