#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 ThunderDev Setup Script');
console.log('==========================\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js version 18 or higher is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed:', nodeVersion);

// Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  console.log('Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Installing backend dependencies...');
  execSync('npm install --prefix thunder/be', { stdio: 'inherit' });
  
  console.log('Installing frontend dependencies...');
  execSync('npm install --prefix thunder/frontend', { stdio: 'inherit' });
  
  console.log('✅ All dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Setup environment file
console.log('\n🔧 Setting up environment configuration...');
const envExamplePath = path.join(__dirname, 'thunder', 'be', '.env.example');
const envPath = path.join(__dirname, 'thunder', 'be', '.env');

if (!fs.existsSync(envPath)) {
  try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from template');
  } catch (error) {
    console.error('❌ Failed to create .env file:', error.message);
  }
} else {
  console.log('ℹ️  .env file already exists');
}

// Build backend
console.log('\n🔨 Building backend...');
try {
  execSync('npm run build --prefix thunder/be', { stdio: 'inherit' });
  console.log('✅ Backend built successfully!');
} catch (error) {
  console.error('❌ Failed to build backend:', error.message);
  process.exit(1);
}

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Add your Google API key to thunder/be/.env');
console.log('   Get your API key from: https://makersuite.google.com/app/apikey');
console.log('2. Run "npm run dev" to start both frontend and backend');
console.log('3. Open http://localhost:5173 in your browser');
console.log('\n💡 Useful commands:');
console.log('   npm run dev          - Start development servers');
console.log('   npm run build        - Build for production');
console.log('   npm run dev:frontend - Start only frontend');
console.log('   npm run dev:backend  - Start only backend');
