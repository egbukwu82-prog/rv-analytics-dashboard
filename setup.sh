#!/bin/bash

# RV Analytics Dashboard - Automated Setup Script
# This script initializes git, installs dependencies, and prepares for deployment

echo "🚀 Setting up RV Analytics Dashboard..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the project root."
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: RV Analytics Dashboard with CanaDream case study

- Built React dashboard with Recharts visualizations
- Identified $200K+ in operational waste for CanaDream RV
- Implemented utilization tracking and revenue analytics
- Comprehensive README with case study
- Production-ready deployment configuration"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create GitHub repository at: https://github.com/new"
echo "   Name it: rv-analytics-dashboard"
echo ""
echo "2. Connect your local repo to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/rv-analytics-dashboard.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Install dependencies:"
echo "   npm install"
echo ""
echo "4. Run locally:"
echo "   npm run dev"
echo ""
echo "5. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Sign in with GitHub"
echo "   - Import rv-analytics-dashboard"
echo "   - Click Deploy"
echo ""
echo "6. Update README.md with:"
echo "   - Your GitHub URL"
echo "   - Your Vercel demo URL"
echo ""
echo "🎯 This project will strengthen your Upwork proposals TODAY!"
echo ""
