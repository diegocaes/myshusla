// ============================================================
//  RESEÑAS DE GOOGLE  —  cómo agregar una nueva (fácil)
// ============================================================
//
//  1. Copia este bloque y pégalo COMO PRIMER elemento del array
//     de abajo (así la más nueva aparece primero):
//
//     {
//       author: "Nombre del cliente",
//       avatarInitial: "N",          // primera letra del nombre
//       rating: 5,                   // 1 a 5 estrellas
//       date: "Hace 2 días",         // texto tal cual lo muestra Google
//       comment: "Pega aquí el comentario de la reseña.",
//     },
//
//  2. Guarda el archivo. Eso es todo.
//     El promedio (★) y el total de reseñas se recalculan solos
//     y se actualizan en la web Y en los datos para Google/IA.
//
//  Tip: el enlace para que los clientes te dejen reseña es la
//  constante REVIEWS_URL de abajo.
// ============================================================

export interface GoogleReview {
  author: string;
  avatarInitial: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  comment: string;
}

const REVIEWS_URL = "https://g.page/r/CesHlga5eub2EAE/review";

// 👇 Pega las reseñas nuevas arriba del todo de esta lista
export const googleReviews: GoogleReview[] = [
  {
    author: "Melanie Ortega",
    avatarInitial: "M",
    rating: 5,
    date: "Hace 6 semanas",
    comment: "Mandé como 4 pares de zapatillas y me las rescataron, usualmente daba por perdido los zapatos cuando ya no se les caía lo sucio. Pero no tenía idea que lo único que necesitaban era una limpieza profesional. Gracias mil!",
  }, 
  {
    author: "Askena Elena Gonzalez Steinheuer",
    avatarInitial: "A",
    rating: 5,
    date: "Hace 4 días",
    comment: "10/10 me encantó, vale la pena, lo volveré a hacer porque fue un trabajo muy profesional, tanto el servicio como el acabado todo muy bien.",
  },
  {
    author: "David Paredes",
    avatarInitial: "D",
    rating: 5,
    date: "Hace 1 semana",
    comment: "¡El mejor servicio! Gracias, recuperan zapatos que pensaba perdidos.",
  },
  {
    author: "Karla Sevilla",
    avatarInitial: "K",
    rating: 5,
    date: "Hace 7 meses",
    comment: "Excelente servicio, ¡mis zapatillas quedaron como nuevas! Tenían manchas en los costados que pensé que no salían. Es evidente que usan herramientas profesionales, nada comparado a lavarlos en casa. ¡Los recomiendo!",
  },
  {
    author: "Gabriela Artavia",
    avatarInitial: "G",
    rating: 5,
    date: "Hace 6 meses",
    comment: "Excelente servicio. Devuelven los zapatos en bolsitas individuales, súper prácticas para viajes.",
  },
];

// --- Cálculos automáticos (no hace falta tocar nada de aquí abajo) ---
const totalReviews = googleReviews.length;
const averageRating =
  totalReviews === 0
    ? 0
    : Math.round((googleReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10;

export const googleBusinessProfile = {
  url: REVIEWS_URL,
  averageRating, // promedio calculado automáticamente
  totalReviews,  // total calculado automáticamente
};
