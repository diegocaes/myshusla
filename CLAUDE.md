# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyShus is a business website for a premium sneaker cleaning service in Panama, built with Astro 5.9.2. The site is deployed on Vercel and uses TypeScript with a minimal, performance-focused architecture.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production with type checking
npm run build

# Preview production build locally
npm run preview

# Run Astro commands directly
npm run astro
```

## Architecture

### Core Structure
- **Astro SSG**: Static site generation with component-based architecture
- **TypeScript**: Type safety with minimal configuration
- **Component-based**: Reusable .astro components with scoped styling
- **No CSS framework**: Custom CSS with CSS custom properties

### Key Files
- `src/layouts/Layout.astro`: Main layout with SEO meta tags, Google Analytics, and global scripts
- `src/pages/index.astro`: Homepage composing all main components
- `src/components/`: Reusable UI components (Navbar, Header, Services, etc.)
- `src/styles/global.css`: Global styles and CSS reset
- `astro.config.mjs`: Minimal Astro configuration

### Styling Architecture
- CSS custom properties (CSS variables) for theming
- Scoped styles within individual components
- Mobile-first responsive design
- Accessibility-focused (ARIA attributes, semantic HTML)

### Component Pattern
Components follow this structure:
```astro
---
// TypeScript logic (if needed)
---

<!-- HTML with semantic markup -->
<element>Content</element>

<script>
  // Client-side JavaScript (if needed)
</script>

<style>
  /* Scoped CSS with custom properties */
</style>
```

## Key Integrations

- **Google Analytics**: Configured in Layout.astro with tracking ID
- **Vercel Analytics**: Integrated for performance monitoring
- **WhatsApp Integration**: Contact button component
- **Lazy Loading**: Custom image lazy loading implementation

## Content Management

- Static content in components
- Images stored in `public/images/`
- Multi-page structure with dedicated routes in `src/pages/`
- SEO optimized with proper meta tags and structured data

## Deployment

- **Platform**: Vercel
- **Branch**: `legacy-version` (auto-deploy)
- **Domain**: myshusla.com
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`

## Development Notes

- Uses Inter font from Google Fonts
- Minimal dependencies for performance
- TypeScript enabled but used sparingly
- Custom favicon and branding assets
- Mobile-responsive navigation with hamburger menu