# MyShus - Sitio Web Oficial

Este es el repositorio del código fuente para el sitio web oficial de **MyShus**, una plataforma dedicada a la limpieza profesional y premium de zapatillas deportivas y de lujo en Panamá.

## Descripción del Proyecto

MyShus ofrece un servicio especializado para dejar tus zapatillas como nuevas, contribuyendo a la sostenibilidad al extender la vida útil de tu calzado. El sitio web proporciona información sobre los servicios, la historia de la empresa, políticas de entrega y reembolso, y métodos de contacto.

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un enfoque moderno y de alto rendimiento, utilizando las siguientes tecnologías:

-   **[Astro](https://astro.build/)**: El framework web principal, enfocado en la velocidad y el rendimiento.
-   **HTML & CSS**: Estructura y estilos puros, sin frameworks de CSS.
-   **JavaScript/TypeScript**: Para la lógica del lado del cliente y la seguridad de tipos en el desarrollo.
-   **[Node.js](https://nodejs.org/)**: El entorno de ejecución para el desarrollo y la compilación. Se recomienda la versión LTS (v20+).

## ☁️ Despliegue

El sitio está desplegado y alojado en **[Vercel](https://vercel.com/)**, que se integra directamente con este repositorio para despliegues continuos y automáticos en cada `push` a la rama `legacy-version`.

## 🛠️ Scripts Disponibles

Para trabajar con el proyecto en un entorno local, puedes utilizar los siguientes scripts de `npm`:

```bash
# Instala todas las dependencies del proyecto
npm install

# Inicia el servidor de desarrollo en http://localhost:4321
npm run dev

# Compila el sitio para producción en el directorio `dist/`
npm run build

# Previsualiza la compilación de producción localmente
npm run preview
```

## 📂 Estructura del Proyecto

El código fuente está organizado de la siguiente manera:

-   `src/pages/`: Contiene todas las páginas del sitio. Cada archivo `.astro` corresponde a una ruta.
-   `src/components/`: Almacena todos los componentes reutilizables (Navbar, botones, secciones, etc.).
-   `src/layouts/`: Define la estructura base de las páginas, incluyendo el `<head>`, metatags, y scripts globales.
-   `src/styles/`: Contiene los archivos de estilos globales, como `global.css`.
-   `public/`: Para todos los activos estáticos que no necesitan ser procesados (imágenes, favicons, etc.).

## 🛠 Scripts disponibles

```bash
npm install     # Instala las dependencias
npm run dev     # Inicia el servidor en desarrollo
npm run build   # Compila para producción
npm run preview # Visualiza el sitio compilado