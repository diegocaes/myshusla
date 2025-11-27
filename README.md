# MyShus - Sitio Web Oficial

Este es el repositorio del código fuente para el sitio web oficial de **MyShus**, una plataforma dedicada a la limpieza profesional y premium de zapatillas deportivas y de lujo en Panamá, con marketplace integrado para productos de cuidado de zapatillas.

## Descripción del Proyecto

MyShus ofrece un servicio especializado para dejar tus zapatillas como nuevas, contribuyendo a la sostenibilidad al extender la vida útil de tu calzado. El sitio web proporciona:

- **Servicios de limpieza profesional** con dos niveles (Sencilla y Completa)
- **Marketplace de productos** para el cuidado de zapatillas
- **Blog con consejos** sobre mantenimiento de sneakers
- **Sistema de recogida y entrega** gratuito
- **Integración con WhatsApp** para contacto y compras

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un enfoque moderno y de alto rendimiento:

-   **[Astro 5.16+](https://astro.build/)**: Framework web principal, enfocado en velocidad y rendimiento
-   **TypeScript**: Seguridad de tipos en el desarrollo
-   **HTML & CSS**: Estructura y estilos puros, sin frameworks de CSS
-   **[Lucide Icons](https://lucide.dev/)**: Iconos SVG optimizados
-   **[Vercel Analytics](https://vercel.com/analytics)**: Monitoreo de rendimiento y métricas
-   **[Node.js](https://nodejs.org/)**: v20+ recomendado

## ☁️ Despliegue

El sitio está desplegado y alojado en **[Vercel](https://vercel.com/)**, con integración continua desde la rama `legacy-version`.

- **URL**: https://myshusla.com
- **Deploy automático**: En cada push a `legacy-version`
- **Preview deploys**: Para PRs

## 🛠️ Scripts Disponibles

```bash
# Instala todas las dependencias del proyecto
npm install

# Inicia el servidor de desarrollo en http://localhost:4321
npm run dev

# Compila el sitio para producción en el directorio `dist/`
npm run build

# Previsualiza la compilación de producción localmente
npm run preview

# Ejecuta comandos de Astro directamente
npm run astro
```

## 📂 Estructura del Proyecto

```
MyShus/
├── src/
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Homepage
│   │   ├── store/          # Marketplace
│   │   │   ├── index.astro         # Listado de productos
│   │   │   └── [id].astro          # Páginas dinámicas de productos
│   │   ├── tips/           # Blog
│   │   │   ├── index.astro
│   │   │   └── *.astro
│   │   ├── about.astro
│   │   ├── contact-form.astro
│   │   └── ...
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Services.astro
│   │   ├── PromotionExplainer.astro
│   │   ├── ProductCard.astro
│   │   └── ...
│   ├── layouts/            # Layouts base
│   │   ├── Layout.astro
│   │   └── BlogLayout.astro
│   ├── data/               # Datos del sitio
│   │   └── products.ts     # Catálogo de productos
│   ├── styles/             # Estilos globales
│   │   └── global.css
│   └── config.ts           # Configuración del sitio
├── public/                 # Archivos estáticos
│   ├── images/
│   │   ├── products/       # Imágenes de productos (1200x1200px)
│   │   └── ...
│   └── favicon.svg
├── CLAUDE.md               # Guía para desarrollo con IA
├── MARKETPLACE_ROADMAP.md  # Plan de desarrollo del marketplace
└── package.json
```

## 🏪 Funcionalidades del Marketplace

### Productos Disponibles

1. **Hormas de Plástico Premium x2** - $10
2. **Pack 50 Bolsas Sílica Gel** - $5
3. **Pack 100 Bolsas Sílica Gel** - $8 (Best Seller)
4. **Kit Limpieza + Toalla Microfibra** - $22

### Características

- ✅ Páginas individuales de producto con SEO optimizado
- ✅ Imágenes optimizadas para web
- ✅ Compra directa por WhatsApp
- ✅ Productos relacionados
- ✅ Descuentos visibles
- ✅ Responsive design
- ✅ Schema.org markup para Google Shopping
- ✅ Internal linking desde blog posts

### Envío

- 🚚 **Envío gratis** en compras superiores a $25
- 📍 Cobertura en toda Panamá

## 📝 Sistema de Blog

El blog (`/tips`) incluye artículos optimizados para SEO sobre cuidado de zapatillas:

- Guías especializadas para clima tropical
- Links internos a productos del marketplace
- Meta tags optimizados
- Structured data para mejores rankings

## 🎨 Sistema de Diseño

### Colores Principales

- **Background**: `#0A0A0A` (Carbon Black)
- **Primary**: `#171717` (Dark Gray)
- **Accent Gold**: `#25D366` (Green gradient)
- **Accent Orange**: `#FF6B35`

### Tipografía

- **Font principal**: Inter (Google Fonts)
- **Responsive**: Clamp para tamaños fluidos
- **Mobile-first**: Diseño optimizado para móviles

### Componentes CSS

- Variables CSS en `:root`
- Scoped styles en componentes
- Mobile-responsive navigation
- Transiciones suaves
- Accessibility-first

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para desarrollo local.

### Configuración del Sitio

Edita `src/config.ts` para actualizar:
- Información de contacto
- WhatsApp numbers
- Stats del negocio
- Social media links

## 📈 SEO y Analytics

- ✅ Google Analytics integrado
- ✅ Vercel Analytics activo
- ✅ Meta tags optimizados por página
- ✅ Structured Data (Schema.org)
- ✅ Sitemap automático
- ✅ Robots.txt configurado

## 🚦 Estado del Proyecto

- **Versión actual**: v0.0.1
- **Estado**: ✅ Producción
- **Branch principal**: `legacy-version`
- **Última actualización**: Noviembre 2024

## 📱 Contacto

- **Website**: https://myshusla.com
- **WhatsApp**: +507 6443-9110
- **Instagram**: [@myshusla](https://instagram.com/myshusla)

## 📄 Licencia

© 2024 MyShus. Todos los derechos reservados.

---

**Desarrollado con ❤️ en Panamá**
