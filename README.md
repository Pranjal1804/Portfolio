# Cyber Portfolio

A modern, interactive portfolio website for cybersecurity and blockchain professionals.

![Portfolio Preview](public/portfolio-preview.png)

## 🔒 Overview

This portfolio showcases expertise in cybersecurity and blockchain development with a sleek, interactive UI that emphasizes technical proficiency while providing an engaging user experience.

## ✨ Features

- **Interactive Loading Screen** - Simulates security protocols with progress indicators
- **Animated Hero Section** - Professional presentation with elegant animation effects 
- **Skills Visualization** - Graphical representation of technical competencies with logos
- **Project Showcase** - Highlighted cybersecurity and blockchain projects
- **Crypto Ticker** - Real-time cryptocurrency price tracking
- **Interactive Blockchain Visualizer** - Educational blockchain visualization
- **Responsive Design** - Optimized for all device sizes
- **Modern UI** - Cybersecurity-themed design with subtle animations
- **Technical Resume** - Detailed professional experience timeline

## 🛠️ Technologies

- **Next.js** - React framework with server-side rendering
- **TypeScript** - Type safety and enhanced developer experience
- **Framer Motion** - Advanced animations and transitions
- **TailwindCSS** - Utility-first styling
- **Anime.js** - JavaScript animation library
- **React Icons** - Extensive icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cyber-portfolio.git
cd cyber-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

## 📁 Project Structure

```
project/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   └── images/           # Image files
├── styles/               # CSS styles
├── utils/                # Utility functions
└── types/                # TypeScript type definitions
```

## ⚙️ Customization

### Personal Information

Edit your personal information in the respective component files:

- **Basic Info**: `components/sections/Hero.tsx`
- **About Info**: `components/sections/About.tsx`
- **Skills**: `components/sections/About.tsx` (skills array)
- **Projects**: `components/sections/Projects.tsx`
- **Resume**: `components/sections/Resume.tsx`

### Images

Replace the following images with your own:

- **Profile Photo**: `public/profile-photo.jpg`
- **Project Thumbnails**: `public/projects/*.jpg`
- **Logo**: `public/logo.svg` (optional)

### Theme Colors

Main theme colors can be adjusted in the CSS variables found in `styles.css`:

```css
:root {
  --background: #0c0c14;
  --surface: #12121e;
  --primary: #b935ff;
  --secondary: #ff3366;
  --text: #ffffff;
  --text-light: #9fadc2;
}
```

## 🌐 Deployment

This portfolio can be easily deployed to Vercel or Netlify:

### Deploy to Vercel:
```bash
npm run build
vercel
```

### Deploy to Netlify:
```bash
npm run build
netlify deploy --prod
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Acknowledgements

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI inspiration from modern cybersecurity dashboards

---

Built with 💜 by Pranjal Mitra