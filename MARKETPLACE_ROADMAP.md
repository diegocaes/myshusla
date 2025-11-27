# MyShus Marketplace - Roadmap y Planificación

## Estado Actual: FASE 0 - Beta Privada ✅

### Lo que tenemos ahora:
- ✅ Estructura de datos de productos (`src/data/products.ts`)
- ✅ Componente ProductCard para mostrar productos
- ✅ Página principal de tienda (`/store`)
- ✅ 4 productos iniciales:
  - Hormas de Cedro Premium
  - Paquete 50 Bolsas de Sílica Gel
  - Paquete 100 Bolsas de Sílica Gel
  - Kit de Limpieza Profesional MyShus
- ✅ Compras por WhatsApp (mensajes pre-configurados)
- ✅ Página oculta (no hay link en navbar, solo accesible por URL directa `/store`)

### Limitaciones actuales:
- ❌ No hay checkout en línea
- ❌ No hay sistema de pagos integrado
- ❌ No hay páginas individuales de productos
- ❌ No hay carrito de compras
- ❌ No hay sistema de inventario automático
- ❌ Imágenes placeholder (necesitan fotos reales)

---

## FASE 1 - Páginas Individuales de Productos 📄

**Objetivo**: Crear páginas detalladas para cada producto

### Tareas:
1. Crear layout `ProductLayout.astro`
2. Crear páginas dinámicas en `/store/[id].astro`
3. Agregar:
   - Galería de imágenes
   - Descripción completa
   - Lista completa de features
   - Tabla de especificaciones
   - Sección "Productos relacionados"
   - Botón de WhatsApp prominente
4. SEO optimizado por producto

### Tiempo estimado: 2-3 horas

---

## FASE 2 - Imágenes Reales y Contenido 📸

**Objetivo**: Reemplazar placeholders con contenido real

### 📁 Ubicación de Imágenes de Productos

Las imágenes deben guardarse en: `/public/images/products/`

**Productos actuales y sus imágenes necesarias:**

1. **Hormas de Plástico Premium** (ID: `shoe-tree-plastic`)
   - Imagen principal: `/public/images/products/shoe-tree-plastic.jpg`
   - Imagen secundaria: `/public/images/products/shoe-tree-plastic-2.jpg`
   - Especificaciones:
     - Tamaño recomendado: 1200x1200px (cuadrado)
     - Formato: JPG optimizado
     - Peso máximo: 300KB
     - Fondo: Blanco o transparente
   - Ángulos sugeridos:
     - Principal: Hormas vistas de frente/diagonal
     - Secundaria: Hormas insertadas en zapatilla

2. **Pack 50 Bolsas Sílica Gel** (ID: `silica-gel-pack-50`)
   - Imagen: `/public/images/products/silica-gel-50.jpg`
   - Especificaciones: Mismo que arriba
   - Contenido sugerido:
     - Packaging del producto
     - Mostrar varias bolsas
     - Incluir indicador de color visible

3. **Pack 100 Bolsas Sílica Gel** (ID: `silica-gel-pack-100`)
   - Imagen: `/public/images/products/silica-gel-100.jpg`
   - Especificaciones: Mismo que arriba
   - Contenido sugerido:
     - Pack más grande
     - Destacar cantidad (ej: badge "100 BOLSAS")

4. **Kit Limpieza + Toalla** (ID: `cleaning-kit-basic`)
   - Imagen: `/public/images/products/cleaning-kit-basic.jpg`
   - Especificaciones: Mismo que arriba
   - Contenido sugerido:
     - Flat lay con todos los componentes
     - Cepillo + toalla microfibra visibles
     - Opcional: Badge "INCLUYE LIMPIEZA GRATIS"

### 📸 Tips para Fotografía de Producto:

**Setup básico:**
- Luz natural difusa (cerca de ventana) o softbox
- Fondo blanco limpio (cartulina o tela)
- Cámara de celular moderna es suficiente
- Usar modo retrato para desenfocar fondo

**Composición:**
- Centrar producto
- Dejar espacio alrededor (20% margin)
- Ángulo ligeramente superior (bird's eye suave)
- Mostrar escala (opcional: junto a zapatilla)

**Post-procesamiento:**
- Ajustar brillo/contraste
- Recortar a cuadrado perfecto
- Comprimir sin perder calidad (TinyPNG.com)
- Formato final: JPG optimizado

### Tareas:
1. ✅ Ubicación definida: `/public/images/products/`
2. ⏳ Tomar fotos profesionales de productos
3. ⏳ Optimizar imágenes para web
4. ⏳ Subir a carpeta correcta
5. ⏳ Verificar que se muestran correctamente

### Tiempo estimado: 2-3 horas (depende de fotografía)

---

## FASE 3 - Carrito de Compras 🛒

**Objetivo**: Permitir agregar múltiples productos antes de comprar

### Tareas:
1. Crear estado global de carrito (Nanostores o similar)
2. Componente `Cart.astro` / `CartWidget.astro`
3. Agregar botón "Agregar al carrito" en ProductCard
4. Floating cart button en todas las páginas
5. Página `/cart` con resumen
6. Botón "Finalizar por WhatsApp" que envía lista completa

### Tecnología sugerida:
```typescript
// Ejemplo con Nanostores
import { atom } from 'nanostores';

export const cart = atom<CartItem[]>([]);
```

### Tiempo estimado: 4-6 horas

---

## FASE 4 - Sistema de Pagos en Línea 💳

**Objetivo**: Permitir pagos directos sin WhatsApp

### Opciones de integración para Panamá:

#### Opción A: Yappy (Popular en Panamá)
- ✅ Pro: Muy usado localmente, confianza del usuario
- ❌ Con: Requiere integración con su API
- Costo: Comisión por transacción (~2-3%)

#### Opción B: Stripe
- ✅ Pro: Fácil integración, internacional
- ✅ Pro: Buena documentación
- ❌ Con: Menos conocido en Panamá que Yappy
- Costo: 3.5% + $0.30 por transacción

#### Opción C: Wompi (Bancolombia)
- ✅ Pro: Opera en Panamá
- ✅ Pro: Acepta múltiples métodos de pago
- Costo: ~3% por transacción

### Tareas:
1. Investigar y seleccionar proveedor
2. Configurar cuenta de merchant
3. Implementar SDK/API del proveedor
4. Crear página `/checkout`
5. Implementar formulario de envío
6. Confirmación de orden por email
7. Webhook para actualizar inventario

### Tiempo estimado: 1-2 semanas

---

## FASE 5 - Gestión de Inventario 📦

**Objetivo**: Sistema para rastrear stock en tiempo real

### Tareas:
1. Migrar productos de archivo TS a base de datos
   - Opción A: Supabase (PostgreSQL gratis)
   - Opción B: Firebase Firestore
   - Opción C: PlanetScale (MySQL)
2. Panel de administración básico:
   - Agregar/editar productos
   - Actualizar stock
   - Ver órdenes
3. Notificaciones de stock bajo
4. Sistema de reposición

### Tiempo estimado: 2 semanas

---

## FASE 6 - Envíos y Logística 🚚

**Objetivo**: Integrar cálculo de envío y tracking

### Tareas:
1. Definir zonas de envío en Panamá
2. Tabla de costos por zona
3. Integración con courier (ej: Uno Express, Air Cargo Express)
4. Tracking de pedidos
5. Notificaciones de estado

### Tiempo estimado: 1 semana

---

## FASE 7 - Marketing y Visibilidad 📢

**Objetivo**: Hacer la tienda visible y atraer tráfico

### Tareas:
1. Agregar link "Tienda" al navbar
2. Banner en homepage promocionando productos
3. Cross-selling: "Combina con servicio de limpieza"
4. Email marketing para clientes existentes
5. Pixel de Facebook/Instagram
6. Google Shopping feed
7. Programa de referidos

### Tiempo estimado: Ongoing

---

## FASE 8 - Funcionalidades Avanzadas 🚀

### Ideas futuras:
- [ ] Sistema de reviews y ratings
- [ ] Wishlist / Lista de deseos
- [ ] Descuentos y cupones
- [ ] Bundles (paquetes combinados con descuento)
- [ ] Suscripciones (ej: sílica gel mensual)
- [ ] Programa de lealtad / puntos
- [ ] Comparador de productos
- [ ] Chat en vivo
- [ ] App móvil (PWA)

---

## Consideraciones Técnicas

### Base de Datos (cuando sea necesario):
```typescript
// Estructura sugerida
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  inStock: boolean;
  stockQuantity: number;
  sku: string;
  features: string[];
  specs: Record<string, string>;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}
```

### Stack tecnológico sugerido:
- **Frontend**: Astro + React islands (para componentes interactivos)
- **Estilos**: Mantener CSS custom actual
- **Estado**: Nanostores para carrito
- **Base de datos**: Supabase (PostgreSQL)
- **Pagos**: Stripe o Yappy
- **Emails**: Resend o SendGrid
- **Hosting**: Mantener Vercel
- **Imágenes**: Cloudinary o Vercel Image Optimization

---

## Métricas de Éxito

### KPIs a rastrear:
1. **Conversión**: % de visitantes que compran
2. **AOV**: Average Order Value (ticket promedio)
3. **CTR**: Click-through rate en productos
4. **Abandono**: Tasa de carritos abandonados
5. **Retorno**: % de clientes que recompran
6. **Tráfico**: Visitas a /store
7. **Revenue**: Ingresos mensuales

### Herramientas:
- Google Analytics 4
- Vercel Analytics (ya instalado)
- Dashboards personalizados en Supabase

---

## Presupuesto Estimado

### Costos mensuales esperados:
- **Hosting**: $0 (Vercel hobby plan)
- **Base de datos**: $0 (Supabase free tier hasta cierto punto)
- **Pagos**: 3% comisión por transacción
- **Emails**: $0 (Resend free tier: 3,000 emails/mes)
- **Dominio**: Ya cubierto
- **CDN/Imágenes**: ~$10-20/mes con Cloudinary

### One-time:
- **Fotografía**: $100-200 (si contratas fotógrafo)
- **Setup de pagos**: $0-50 (depende del proveedor)

**Total mensual estimado**: $10-30 + comisiones de venta

---

## Próximos Pasos Inmediatos

### Para hacer AHORA:
1. ✅ Estructura básica de tienda (HECHO)
2. 🔄 Conseguir fotos reales de productos
3. 🔄 Testing con usuarios beta (tú y amigos cercanos)
4. 🔄 Recopilar feedback
5. ⏳ Decidir si continuar a Fase 1 o primero promocionar beta

### Preguntas a resolver:
- ¿Qué proveedor de pagos prefieres? (Yappy vs Stripe)
- ¿Cuántos productos más planeas agregar pronto?
- ¿Tienes proveedor de los productos o necesitas encontrar?
- ¿Quieres agregar productos de otras marcas (reselling)?

---

## Notas de Implementación

### Mantener oculto por ahora:
```astro
<!-- En Navbar.astro - NO agregar este link todavía -->
<!-- <a href="/store">Tienda</a> -->
```

### Para hacer pública la tienda:
1. Agregar link en Navbar
2. Agregar banner en homepage
3. Mencionar en redes sociales
4. Actualizar sitemap.xml
5. Anunciar por WhatsApp a clientes existentes

---

**Última actualización**: Noviembre 2024
**Mantenido por**: Claude Code
**Status**: 🟡 Beta Privada
