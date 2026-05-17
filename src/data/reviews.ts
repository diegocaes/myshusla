export interface GoogleReview {
  author: string;
  avatarInitial: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  comment: string;
}

export const googleBusinessProfile = {
  url: "https://g.page/r/CesHlga5eub2EAE/review",
  averageRating: 5.0,
  totalReviews: 4,
};

export const googleReviews: GoogleReview[] = [
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
