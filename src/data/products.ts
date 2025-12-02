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
  stockQuantity: number;
  features: string[];
  specs?: {
    [key: string]: string;
  };
  whatsappMessage?: string; // Mensaje pre-configurado para WhatsApp
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
    stockQuantity: 50,
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
    stockQuantity: 30,
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
  },
];

// Función helper para obtener productos por categoría
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}

// Función helper para obtener producto por ID
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// Categorías disponibles
export const categories = {
  care: {
    name: 'Cuidado',
    description: 'Productos para mantener tus zapatillas impecables',
    icon: 'sparkles',
  },
  storage: {
    name: 'Almacenamiento',
    description: 'Mantén la forma y protege tus zapatillas',
    icon: 'box',
  },
  accessories: {
    name: 'Accesorios',
    description: 'Complementos esenciales para sneakerheads',
    icon: 'shopping-bag',
  },
};
