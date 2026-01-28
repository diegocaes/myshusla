# CLAUDE.md - El Taburete

Este archivo proporciona guía a Claude Code (claude.ai/code) cuando trabajes con código en este repositorio.

## Descripción del Proyecto

El Taburete es un sitio web para un negocio de mobiliario y decoración en Panamá. El sitio presenta un portfolio de proyectos de mobiliario personalizado y decoración de interiores, con una tienda integrada planificada para Fase 2. Construido con Astro 5.x+, desplegado en Vercel con TypeScript y arquitectura minimalista enfocada en rendimiento.

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Compilar para producción con verificación de tipos
npm run build

# Previsualizar build de producción localmente
npm run preview

# Ejecutar comandos de Astro directamente
npm run astro
```

## Arquitectura

### Estructura Principal
- **Astro SSG**: Generación de sitio estático con arquitectura basada en componentes
- **TypeScript**: Seguridad de tipos con configuración mínima
- **Basado en componentes**: Componentes .astro reutilizables con estilos aislados
- **Sin framework CSS**: CSS personalizado con custom properties (variables CSS)

### Archivos Clave

**Componentes Principales:**
- `src/layouts/Layout.astro`: Layout principal con meta tags SEO, Google Analytics, y scripts globales
- `src/pages/index.astro`: Página principal componiendo todos los componentes
- `src/components/`: Componentes UI reutilizables (Navbar, Header, Portfolio, Services, Contact, Footer)
- `src/styles/global.css`: Estilos globales y reset CSS
- `src/config.ts`: Configuración del sitio incluyendo enlaces WhatsApp e información del negocio

**Portfolio/Proyectos:**
- `src/pages/proyectos/index.astro`: Galería de proyectos con grid de imágenes
- `src/pages/proyectos/[id].astro`: Páginas dinámicas de detalle de proyecto con SEO
- `src/data/projects.ts`: Catálogo de proyectos con interfaces TypeScript
- `src/components/ProjectCard.astro`: Componente tarjeta de proyecto reutilizable
- `public/images/projects/`: Imágenes de proyectos (1200x800px recomendado, JPG optimizado)

**Blog (Opcional):**
- `src/pages/blog/index.astro`: Página listado de artículos
- `src/pages/blog/*.astro`: Posts individuales con enlaces internos a proyectos
- `src/layouts/BlogLayout.astro`: Layout para posts del blog

**Tienda (Fase 2):**
- `src/pages/tienda/index.astro`: Página principal del marketplace
- `src/pages/tienda/[id].astro`: Páginas de detalle de producto
- `src/data/products.ts`: Catálogo de productos con interfaces TypeScript
- `src/components/ProductCard.astro`: Componente tarjeta de producto
- `public/images/products/`: Imágenes de productos (1200x1200px, JPG optimizado)

**Configuración:**
- `astro.config.mjs`: Configuración mínima de Astro
- `tsconfig.json`: Configuración TypeScript (opcional, Astro lo maneja internamente)

### Arquitectura de Estilos
- CSS custom properties (variables CSS) para theming
- Estilos aislados (scoped) dentro de cada componente
- Diseño responsive mobile-first
- Enfoque en accesibilidad (atributos ARIA, HTML semántico)

### Patrón de Componentes
Los componentes siguen esta estructura:
```astro
---
// Lógica TypeScript (si es necesario)
interface Props {
  title: string;
  // ... otras props
}
const { title } = Astro.props;
---

<!-- HTML con marcado semántico -->
<section class="component-name">
  <h2>{title}</h2>
</section>

<script>
  // JavaScript del lado del cliente (si es necesario)
</script>

<style>
  /* CSS con alcance local usando custom properties */
  .component-name {
    padding: var(--spacing-lg);
  }
</style>
```

## Variables CSS Recomendadas

```css
:root {
  /* Colores - Personalizar según marca */
  --color-primary: #8B4513;      /* Marrón madera */
  --color-secondary: #D2691E;    /* Marrón claro */
  --color-accent: #F5DEB3;       /* Trigo/beige */
  --color-text: #2C1810;         /* Texto oscuro */
  --color-text-light: #5D4037;
  --color-background: #FFFAF5;   /* Fondo cálido */
  --color-white: #FFFFFF;

  /* Tipografía */
  --font-primary: 'Inter', sans-serif;
  --font-heading: 'Playfair Display', serif;  /* Elegante para títulos */

  /* Espaciado */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Bordes */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Sombras */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
}
```

## Integraciones Clave

- **Google Analytics**: Configurado en Layout.astro con tracking ID
- **Vercel Analytics**: Integrado para monitoreo de rendimiento
- **Integración WhatsApp**: Componente de botón de contacto flotante
- **Lazy Loading**: Implementación personalizada de carga diferida de imágenes
- **Lightbox**: Para galería de imágenes de proyectos (opcional)

## Gestión de Contenido

- Contenido estático en componentes
- Imágenes almacenadas en `public/images/`
- Estructura multi-página con rutas dedicadas en `src/pages/`
- SEO optimizado con meta tags y datos estructurados (Schema.org)

## Estructura de Datos

### Proyectos (projects.ts)
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'mobiliario' | 'decoracion' | 'restauracion' | 'personalizado';
  images: string[];
  featured: boolean;
  completionDate: string;
  client?: string;
  location?: string;
  materials?: string[];
}

export const projects: Project[] = [
  {
    id: 'mesa-comedor-rustica',
    title: 'Mesa de Comedor Rústica',
    description: 'Mesa de madera maciza con acabado natural',
    longDescription: 'Descripción detallada del proyecto...',
    category: 'mobiliario',
    images: ['/images/projects/mesa-rustica-1.jpg'],
    featured: true,
    completionDate: '2025-10',
    materials: ['Madera de cedro', 'Acabado mate natural'],
  },
  // ... más proyectos
];
```

### Productos (Fase 2 - products.ts)
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'muebles' | 'decoracion' | 'accesorios';
  inStock: boolean;
  stockQuantity: number;
  features: string[];
  dimensions?: {
    width: string;
    height: string;
    depth: string;
  };
  whatsappMessage?: string;
}
```

## Despliegue

- **Plataforma**: Vercel
- **Rama**: `main` (auto-deploy)
- **Dominio**: eltaburete.com (configurar)
- **Comando de build**: `npm run build`
- **Directorio de salida**: `dist/`

## Notas de Desarrollo

- Usa fuentes de Google Fonts (Inter + Playfair Display recomendado)
- Dependencias mínimas para rendimiento
- TypeScript habilitado pero usado de forma moderada
- Favicon y assets de branding personalizados
- Navegación móvil responsive con menú hamburguesa

## Funcionalidades del Negocio

### Portfolio de Proyectos

Categorías de proyectos:
- **Mobiliario**: Mesas, sillas, estantes, muebles a medida
- **Decoración**: Diseño de interiores, accesorios decorativos
- **Restauración**: Restauración de muebles antiguos
- **Personalizado**: Proyectos especiales bajo pedido

Estructura de página de proyecto:
- Galería de imágenes con lightbox
- Descripción detallada
- Materiales utilizados
- Fecha de completación
- CTA para contacto/cotización

### Tienda (Fase 2)

Productos planificados:
- Muebles pequeños listos para entregar
- Accesorios de decoración
- Productos de cuidado de madera

Funcionalidades:
- Páginas individuales con SEO
- Integración WhatsApp para compras
- Recomendaciones de productos relacionados
- Schema.org Product structured data
- Diseño responsive optimizado para móvil

## Roadmap de Desarrollo

### Fase 1 - Portfolio (MVP)
- [ ] Configuración inicial del proyecto Astro
- [ ] Layout principal con navegación
- [ ] Página de inicio con hero y servicios
- [ ] Galería de proyectos
- [ ] Páginas de detalle de proyecto
- [ ] Página de contacto con formulario/WhatsApp
- [ ] SEO básico y meta tags
- [ ] Despliegue en Vercel

### Fase 2 - Tienda
- [ ] Sistema de productos
- [ ] Páginas de catálogo
- [ ] Páginas de detalle de producto
- [ ] Integración WhatsApp para pedidos
- [ ] Filtros por categoría

### Fase 3 - Optimizaciones
- [ ] Blog con contenido de valor
- [ ] Newsletter
- [ ] Testimonios de clientes
- [ ] Galería mejorada con filtros
- [ ] Optimización de imágenes (WebP)

## SEO y Schema.org

### LocalBusiness Schema (Layout.astro)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "El Taburete",
  "description": "Mobiliario y decoración artesanal en Panamá",
  "url": "https://eltaburete.com",
  "telephone": "+507-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PA",
    "addressLocality": "Ciudad de Panamá"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.9936",
    "longitude": "-79.5197"
  },
  "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00"
}
```

### Producto Schema (páginas de producto)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nombre del Producto",
  "description": "Descripción del producto",
  "image": "URL de imagen",
  "offers": {
    "@type": "Offer",
    "price": "100",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

## Checklist Pre-Lanzamiento

- [ ] Verificar todos los enlaces internos
- [ ] Optimizar imágenes (comprimir, formatos modernos)
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Verificar meta tags en todas las páginas
- [ ] Probar en dispositivos móviles
- [ ] Verificar velocidad de carga (Lighthouse)
- [ ] Configurar dominio y SSL
- [ ] Crear sitemap.xml
- [ ] Crear robots.txt

## Contacto y Recursos

- **WhatsApp Business**: +507-XXXX-XXXX
- **Instagram**: @eltaburete (configurar)
- **Email**: contacto@eltaburete.com (configurar)

---

*Este archivo CLAUDE.md sirve como guía principal para el desarrollo. Actualízalo conforme el proyecto evolucione.*
