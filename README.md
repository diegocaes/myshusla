# MyShus Web

Este repositorio contiene el código fuente de la página web de **MyShus**, desarrollada con [Astro](https://astro.build) y desplegada en [Vercel](https://vercel.com).

## 🔁 Transición de ramas

Inicialmente, este proyecto tenía una versión anterior en local que contenía:
- Sección de promociones activas.
- Un error en el deployment que impedía la visualización correcta en producción.

Para resolver esto:
1. Se creó la rama `legacy-version`, donde se desactivaron las promociones y se corrigió el error de deployment.
2. Esta rama fue probada exitosamente en Vercel con un deploy tipo **preview**.
3. Tras la validación, se designó como nueva rama principal (`main`) del repositorio.

## 🚀 Tecnologías

- [Astro](https://astro.build/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Node.js v20+ (LTS recomendado)

## 🛠 Scripts disponibles

```bash
npm install     # Instala las dependencias
npm run dev     # Inicia el servidor en desarrollo
npm run build   # Compila para producción
npm run preview # Visualiza el sitio compilado