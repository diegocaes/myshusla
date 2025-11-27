# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyShus is a business website for a premium sneaker cleaning service in Panama, built with Astro 5.16+. The site features professional cleaning services and an integrated e-commerce marketplace for sneaker care products. Deployed on Vercel with TypeScript and a minimal, performance-focused architecture.

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

**Core Components:**
- `src/layouts/Layout.astro`: Main layout with SEO meta tags, Google Analytics, and global scripts
- `src/pages/index.astro`: Homepage composing all main components
- `src/components/`: Reusable UI components (Navbar, Header, Services, etc.)
- `src/components/PremiumBanner.astro`: Yellow banner showing free pickup/delivery
- `src/components/Services.astro`: Service cards with pricing (Sencilla $18, Completa $25)
- `src/components/PromotionExplainer.astro`: Pricing table showing discounts for both services (3+ pairs get discount)
- `src/styles/global.css`: Global styles and CSS reset
- `src/config.ts`: Site configuration including WhatsApp links and business stats

**Marketplace:**
- `src/pages/store/index.astro`: Main marketplace page with product grid
- `src/pages/store/[id].astro`: Dynamic product detail pages with SEO optimization
- `src/data/products.ts`: Product catalog with TypeScript interfaces
- `src/components/ProductCard.astro`: Reusable product card component
- `public/images/products/`: Product images (1200x1200px, optimized JPG)

**Blog:**
- `src/pages/tips/index.astro`: Blog listing page
- `src/pages/tips/*.astro`: Individual blog posts with internal links to products
- `src/layouts/BlogLayout.astro`: Blog post layout

**Configuration:**
- `astro.config.mjs`: Minimal Astro configuration
- `MARKETPLACE_ROADMAP.md`: Marketplace development phases and planning

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

## Business Features

### Cleaning Services Pricing

The site features two cleaning services with volume discounts:

- **Limpieza Sencilla**: $18 per pair (single), $15 per pair (3+ pairs)
- **Limpieza Completa**: $25 per pair (single), $22 per pair (3+ pairs)

Volume discounts shown in dollar savings:
- 1-2 pares: Regular price (no discount)
- 3 pares: Save $18 total
- 4 pares: Save $24 total
- 5 pares: Save $30 total
- 6 pares: Save $36 total
- 7 pares: Save $42 total

Displayed in:
- `Services.astro`: Individual service cards
- `PromotionExplainer.astro`: Comparative pricing table showing both services side-by-side with dollar savings

### Marketplace Products

The store (`/store`) sells sneaker care products:

1. **Hormas de Plástico Premium** - $10 (was $15)
2. **Pack 50 Bolsas Sílica Gel** - $5 (was $7)
3. **Pack 100 Bolsas Sílica Gel** - $8 (was $10)
4. **Kit Limpieza + Toalla Microfibra** - $22 (was $28)

Features:
- Individual product pages with SEO optimization
- WhatsApp integration for purchases
- Related products recommendations
- Schema.org Product structured data
- Mobile-optimized responsive design
- Internal linking from blog posts to products

Free shipping on orders over $25.