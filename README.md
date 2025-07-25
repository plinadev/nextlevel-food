# Next Level Food

A modern food sharing platform built with Next.js where food enthusiasts can discover, share, and celebrate delicious recipes from around the world.

## Features

- **Recipe Discovery** - Browse through a curated collection of amazing recipes
- **Share Your Creations** - Upload and share your favorite recipes with the community
- **Interactive UI** - Modern, responsive design with smooth user experience

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Modern React with latest features

## Prerequisites

Before running this application, make sure you have:
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/plinadev/nextlevel-food.git
   cd nextlevel-food
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
nextlevel-food/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── globals.css         # Global styles
│   ├── layout.js          # Root layout component
│   └── page.js            # Home page
├── public/                # Static assets
│   ├── images/            # Recipe images and icons
│   └── ...
├── styles/                # Additional stylesheets
├── lib/                   # Utility functions and configurations
├── package.json
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md
```

## Features Overview

### Recipe Sharing
- Upload your favorite recipes with detailed instructions
- Add beautiful food photography
- Include ingredient lists and cooking times
- Share cooking tips and variations

### Community Features
- Browse recipes from other food enthusiasts
- Like and save your favorite recipes
- Comment and share cooking experiences
- Discover trending recipes

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

You can start editing the application by modifying:
- `app/page.js` - Main home page
- `app/layout.js` - Root layout and global components
- `app/globals.css` - Global styles and theme

The page auto-updates as you edit files thanks to Next.js hot reloading.
