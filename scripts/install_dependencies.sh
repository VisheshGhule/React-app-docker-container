#!/bin/bash

set -e

# Navigate to project root
cd "$(dirname "$0")/.."

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install

echo "✅ All dependencies installed."
 
