export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  readingTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Cuánto Cuesta Limpiar Zapatillas en Panamá: Guía Completa de Precios 2026",
    description: "Guía 2026 con precios reales de limpieza de zapatillas en Panamá. Comparativa entre servicio profesional y limpieza casera, descuentos por volumen, servicios extras y cómo elegir el mejor para tu calzado.",
    slug: "cuanto-cuesta-limpiar-zapatillas-panama",
    publishDate: "2026-05-17",
    readingTime: "6 min de lectura",
    category: "Precios y Servicios",
  },
  {
    title: "Cómo Limpiar Zapatillas Blancas: Guía Definitiva 2026 para Nike, Adidas y Más",
    description: "Guía completa para limpiar zapatillas blancas en Panamá. Métodos probados para Air Force 1, Stan Smith, Converse y más. Aprende a blanquear sneakers y quitar manchas sin arruinarlas.",
    slug: "como-limpiar-zapatillas-blancas",
    publishDate: "2026-01-13",
    readingTime: "8 min de lectura",
    category: "Guías de Limpieza",
  },
  {
    title: "Cómo Cuidar tus Zapatillas en la Época de Lluvias en Panamá",
    description: "Guía completa para proteger tus zapatillas de la humedad y las lluvias en Panamá. Consejos de impermeabilización, secado y limpieza profesional.",
    slug: "cuidado-zapatillas-humedad-panama",
    publishDate: "2025-11-01",
    readingTime: "4 min de lectura",
    category: "Clima Tropical",
  },
  {
    title: "Por Qué No Deberías Lavar Tus Zapatillas en la Lavadora",
    description: "Descubre por qué lavar tus zapatillas en la lavadora puede dañarlas permanentemente y qué alternativas existen para mantenerlas impecables.",
    slug: "por-que-no-lavar-zapatillas-lavadora",
    publishDate: "2025-01-15",
    readingTime: "3 min de lectura",
    category: "Cuidado de Zapatillas",
  },
];

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}
