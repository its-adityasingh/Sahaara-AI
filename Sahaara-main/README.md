# SAHAARA - Integrated Care & Wellbeing Platform

<div align="center">

![SAHAARA](https://img.shields.io/badge/SAHAARA-Integrated%20Care%20Platform-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?logo=vite)

**Building the Care Network of Tomorrow, Today**

A comprehensive care platform designed to transform community wellbeing through cutting-edge technology, addressing critical challenges of elderly care, youth mental health, child nutrition, and accessible education.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 About

SAHAARA is an innovative care platform that integrates multiple care modules to provide comprehensive support for individuals and families. The platform combines advanced technology with compassionate care to create a unified wellbeing ecosystem.

### Core Modules

- **Ayush** - Advanced Elderly Care: Comprehensive elderly care platform providing emotional support, health monitoring, and companionship services
- **Manas & Fit** - Youth Mental & Physical Wellbeing: Integrated mental health and fitness platform designed for youth
- **Poshan** - Child Nutrition & Growth: Smart nutrition and growth tracking platform for children
- **Gyaan** - Accessible Education Platform: Inclusive education platform that removes barriers to learning

## ✨ Features

- 🏥 **Integrated Care Modules** - Four comprehensive modules addressing different aspects of community wellbeing
- 📊 **Real-time Monitoring** - Health tracking and analytics for better care outcomes
- 🎨 **Modern UI/UX** - Beautiful, responsive design built with shadcn/ui and Tailwind CSS
- ♿ **Accessibility First** - Inclusive design principles ensuring access for all users
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Vite for lightning-fast development and production builds
- 🎭 **Smooth Animations** - Engaging user experience with carefully crafted animations

## 🛠 Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library

### Additional Libraries
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Data fetching and state management
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation

## 📦 Installation

### Prerequisites

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sahaara-gentle-living.git
   cd sahaara-gentle-living
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in your terminal)

## 🚀 Usage

### Development

Run the development server with hot-reload:

```bash
npm run dev
```

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style:

```bash
npm run lint
```

## 📁 Project Structure

```
sahaara-gentle-living/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── placeholder.svg
├── src/
│   ├── assets/            # Image assets
│   │   ├── child-nutrition.jpg
│   │   ├── education-access.jpg
│   │   ├── elderly-care.jpg
│   │   ├── hero-family.jpg
│   │   └── youth-wellness.jpg
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ModulesSection.tsx
│   │   ├── Navbar.tsx
│   │   └── NavLink.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🌐 Deployment

### GitHub Pages

1. **Install gh-pages** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** to set the base path:
   ```typescript
   export default defineConfig({
     base: '/sahaara-gentle-living/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via Netlify CLI or drag-and-drop the `dist` folder

### Other Platforms

The `dist` folder contains the production-ready static files that can be deployed to any static hosting service:
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Any web server (nginx, Apache, etc.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design for all new components
- Test your changes across different browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Contact

For questions, suggestions, or support, please open an issue on GitHub.

---

<div align="center">

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

</div>
