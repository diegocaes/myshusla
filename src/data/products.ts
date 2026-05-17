// Catálogo de productos para el marketplace de MyShus
// TODO: Eventualmente mover a una base de datos cuando escalemos

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number; // Para mostrar descuentos
  images: string[];
  category: 'care' | 'storage' | 'accessories';
  inStock: boolean;
  features: string[];
  specs?: {
    [key: string]: string;
  };
  whatsappMessage?: string; // Mensaje pre-configurado para WhatsApp
  visible?: boolean; // true = mostrar en tienda, false = oculto (default: true)
}

export const products: Product[] = [
  {
    id: 'shoe-tree-plastic',
    name: 'Hormas de Plástico Premium x2',
    description: 'Hormas profesionales de plástico negro que mantienen la forma perfecta de tus zapatillas | Ajustables talla 7-13 US | Previene arrugas y deformaciones en tus zapatillas',
    longDescription: 'Hormas de plástico premium diseñadas para mantener la forma original de tus zapatillas en el clima húmedo de Panamá. Material ABS resistente y ligero, ajustables para diferentes tallas (7-13 US). Ideales para evitar arrugas en el upper y mantener la estructura perfecta de tus sneakers. Usadas por coleccionistas y profesionales del calzado. Incluye 4 hormas (2 pares completos). Protege tu inversión en zapatillas premium con el mejor almacenamiento disponible en Panamá.',
    price: 10,
    originalPrice: 15,
    images: [
      '/images/products/shoe-tree-plastic.jpg',
      '/images/products/shoe-tree-plastic-2.jpg',
      '/images/products/shoe-tree-plastic-3.jpg',
    ],
    category: 'storage',
    inStock: true,
    features: [
      'Material plástico ABS premium resistente al clima tropical',
      'Color negro profesional discreto',
      'Ajustable a tallas 7-13 US (mayoría de zapatillas)',
      'Mantiene forma perfecta del upper sin deformaciones',
      'Evita arrugas permanentes en materiales delicados',
      'Ligeras (150g) y ultra duraderas',
      'Incluye 4 hormas completas (2 pares de zapatillas)',
    ],
    specs: {
      'Material': 'Plástico ABS de alta resistencia',
      'Tallas compatibles': '7-13 US (ajustable)',
      'Peso unitario': '150g por par de hormas',
      'Color': 'Negro mate profesional',
      'Cantidad': '4 hormas (2 pares completos)',
      'Uso ideal': 'Zapatillas de colección, sneakers premium',
    },
    whatsappMessage: 'Hola! Me interesan las Hormas de Plástico Premium (2 pares) de myshusla.com/store - ¿Están disponibles?',
    visible: true,
  },
  {
    id: 'cleaning-kit-basic',
    name: 'Kit Limpieza + Toalla Microfibra',
    description: 'Kit completo limpieza zapatillas: Cepillo cerdas suaves + toalla microfibra 30x30cm | Calidad profesional para mantener tus sneakers impecables en Panamá',
    longDescription: 'Kit esencial de limpieza profesional que incluye cepillo de cerdas naturales suaves y toalla de microfibra de alta absorción 30x30cm. Perfecto para limpiezas rápidas y mantenimiento semanal de tus zapatillas en el clima de Panamá. El cepillo de cerdas naturales está específicamente diseñado para no dañar materiales delicados como cuero, gamuza, nobuck, mesh y telas sintéticas. La toalla de microfibra absorbe 7 veces su peso en agua, ideal para secado sin pelusas. Incluye BONO: 1 limpieza profesional gratis de MyShus (valor $18-25). Usado por sneakerheads y coleccionistas para mantención entre limpiezas profesionales.',
    price: 22,
    originalPrice: 28,
    images: [
      '/images/products/cleaning-kit-basic.jpg',
    ],
    category: 'care',
    inStock: true,
    features: [
      'Cepillo cerdas naturales suaves - seguro para todos los materiales',
      'Toalla microfibra profesional 30x30cm - sin pelusas',
      'No daña cuero, gamuza, nobuck, mesh ni sintéticos',
      'Perfecto para mantenimiento semanal y limpieza rápida',
      'BONO incluido: 1 limpieza profesional gratis MyShus (valor $18-25)',
      'Calidad profesional - mismo kit que usan nuestros técnicos',
      'Diseñado para clima húmedo de Panamá',
    ],
    specs: {
      'Cepillo': 'Cerdas naturales suaves profesionales',
      'Toalla': 'Microfibra premium 30x30cm (400 GSM)',
      'Materiales seguros': 'Cuero, gamuza, nobuck, mesh, sintéticos',
      'Bono incluido': '1 limpieza profesional MyShus gratis (valor $18-25)',
      'Uso recomendado': 'Semanal o después de cada uso',
      'Durabilidad': '100+ limpiezas',
    },
    whatsappMessage: 'Hola! Quiero el Kit de Limpieza + Toalla Microfibra de myshusla.com/store - ¿Está disponible?',
    visible: true,
  },
  {
    id: 'silica-gel-pack-50',
    name: 'Pack 50 Bolsas Sílica Gel',
    description: 'Pack 50 bolsas de sílica gel desecante para proteger tus zapatillas de la humedad | Previene moho y malos olores | Ideal para clima tropical de Panamá',
    longDescription: 'Pack de 50 bolsas de sílica gel de alta capacidad, diseñadas específicamente para proteger tus zapatillas de la humedad extrema del clima tropical panameño. Cada bolsa absorbe hasta 40% de su peso en humedad, previniendo efectivamente el moho, malos olores y deterioro de materiales. Perfectas para guardar dentro de cajas de zapatillas, closets y storage. Las bolsas son reutilizables - simplemente sécalas al sol o en microondas para reactivarlas. Indispensables para cualquier coleccionista serio de sneakers en Panamá.',
    price: 5,
    originalPrice: 7,
    images: [
      '/images/products/silica-gel-50.jpg',
    ],
    category: 'storage',
    inStock: true,
    features: [
      '50 bolsas de sílica gel de alta capacidad',
      'Absorbe hasta 40% de su peso en humedad',
      'Previene moho y malos olores efectivamente',
      'Reutilizables - se reactivan con calor',
      'Tamaño perfecto para cajas de zapatillas',
      'Indicador de saturación (cambia de color)',
      'Esencial para clima húmedo de Panamá',
    ],
    specs: {
      'Cantidad': '50 bolsas',
      'Capacidad': 'Absorbe 40% de su peso',
      'Tamaño por bolsa': '5x7cm',
      'Reutilizable': 'Sí - reactiva con calor (sol/microondas)',
      'Indicador': 'Cambia de azul a rosa cuando saturado',
      'Uso recomendado': '2-3 bolsas por caja de zapatillas',
    },
    whatsappMessage: 'Hola! Me interesa el Pack de 50 Bolsas Sílica Gel de myshusla.com/store - ¿Está disponible?',
    visible: false, // OCULTO - cambiar a true para mostrar
  },
  {
    id: 'silica-gel-pack-100',
    name: 'Pack 100 Bolsas Sílica Gel',
    description: 'Pack 100 bolsas de sílica gel desecante - mejor valor para coleccionistas | Protege toda tu colección de la humedad | Ideal para sneakerheads en Panamá',
    longDescription: 'Pack económico de 100 bolsas de sílica gel para los coleccionistas serios. Misma calidad premium que el pack de 50 pero con mejor precio por unidad. Ideal para proteger colecciones grandes de zapatillas, closets completos o para compartir con amigos sneakerheads. Las bolsas de sílica gel son la primera línea de defensa contra la humedad en el clima tropical de Panamá, previniendo el temido "sole separation", amarillamiento de suelas y deterioro de materiales. Pack suficiente para aproximadamente 35-50 pares de zapatillas.',
    price: 8,
    originalPrice: 10,
    images: [
      '/images/products/silica-gel-100.jpg',
    ],
    category: 'storage',
    inStock: true,
    features: [
      '100 bolsas de sílica gel - mejor valor',
      'Protege 35-50 pares de zapatillas',
      'Previene "sole separation" y amarillamiento',
      'Mismo producto premium que pack 50',
      'Reutilizables infinitamente con calor',
      'Ahorro del 20% vs comprar 2 packs de 50',
      'Ideal para coleccionistas serios',
    ],
    specs: {
      'Cantidad': '100 bolsas',
      'Capacidad': 'Absorbe 40% de su peso',
      'Tamaño por bolsa': '5x7cm',
      'Reutilizable': 'Sí - reactiva con calor (sol/microondas)',
      'Indicador': 'Cambia de azul a rosa cuando saturado',
      'Cobertura': '35-50 pares de zapatillas',
    },
    whatsappMessage: 'Hola! Quiero el Pack de 100 Bolsas Sílica Gel de myshusla.com/store - ¿Está disponible?',
    visible: false, // OCULTO - cambiar a true para mostrar
  },
];

// Función helper para obtener solo productos visibles
export function getVisibleProducts(): Product[] {
  return products.filter(p => p.visible !== false);
}

// Función helper para obtener producto por ID (incluso ocultos, para URLs directas)
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
