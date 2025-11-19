# 📊 Cómo Actualizar las Estadísticas del Sitio

## Actualizar el Número de Zapatillas Limpiadas

Cuando limpies más zapatillas y quieras actualizar el número en toda la web, sigue estos pasos:

### 1. Abre el archivo de configuración

Dirígete a: **`src/config.ts`**

### 2. Actualiza el número

Busca esta línea:

```typescript
sneakersCleaned: 150,
```

Cambia `150` por el nuevo número. Por ejemplo, si ya limpiaste 200 pares:

```typescript
sneakersCleaned: 200,
```

### 3. Guarda el archivo

Eso es todo! 🎉

## ¿Dónde se actualiza automáticamente?

El número se actualizará automáticamente en:

1. **Ticker** (la barra que se mueve en la parte superior)
   - "💯 +150 Zapatillas Limpiadas"

2. **FAQ - Preguntas Frecuentes**
   - Pregunta: "¿Es seguro el proceso de limpieza para mis zapatillas?"
   - Respuesta: "...ha sido probado en más de 150 pares de zapatillas..."

3. **Sección de Confianza** (Trust Section)
   - Banner verde: "Más de 150 pares de zapatillas limpiadas..."

## Otras configuraciones disponibles

En el mismo archivo `src/config.ts` también puedes actualizar:

- Número de WhatsApp
- Todas las URLs de WhatsApp preconfiguradas
- Y más...

## Compilar los cambios

Después de actualizar, ejecuta:

```bash
npm run build
```

O para desarrollo local:

```bash
npm run dev
```

---

**¡Mantén este número actualizado para mostrar tu credibilidad! 💪**
