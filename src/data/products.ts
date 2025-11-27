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
    description: 'Hormas profesionales de plástico negro que mantienen la forma perfecta de tus zapatillas',
    longDescription: 'Hormas de plástico premium diseñadas para mantener la forma original de tus zapatillas. Material resistente y ligero, ajustables para diferentes tallas. Ideales para evitar arrugas en el upper y mantener la estructura perfecta de tus sneakers. Usadas por coleccionistas y profesionales.',
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
      'Material plástico premium resistente',
      'Color negro profesional',
      'Ajustable a diferentes tallas',
      'Mantiene forma perfecta del upper',
      'Evita arrugas y deformaciones',
      'Ligeras y duraderas',
      '4 hormas para 2 pares',
    ],
    specs: {
      'Material': 'Plástico ABS de alta calidad',
      'Tallas': '7-13 US (ajustable)',
      'Peso': '150g por par',
      'Color': 'Negro',
    },
    whatsappMessage: 'Hola! Me interesan las Hormas de Plástico Premium de myshusla.com/store',
  },
  {
    id: 'silica-gel-pack-50',
    name: 'Pack 50 Bolsas Sílica Gel',
    description: '50 bolsas deshumidificadoras reutilizables - Protección anti-humedad para Panamá',
    longDescription: 'Pack de 50 bolsas de sílica gel con indicador de saturación. Protege tus zapatillas de la humedad del clima panameño. Reutilizables infinitamente - solo reactívalas al sol. Cada bolsa absorbe hasta 40% de su peso en humedad, previniendo moho y mal olor.',
    price: 5,
    originalPrice: 7,
    images: [
      '/images/products/silica-gel-50.jpg',
    ],
    category: 'care',
    inStock: true,
    stockQuantity: 50,
    features: [
      '50 bolsas de 5g c/u',
      'Indicador de color (saber cuándo reactivar)',
      'Reutilizables al 100%',
      'Reactiva en 2-3 horas al sol',
      'No tóxico y seguro',
      'Perfecto para clima húmedo',
    ],
    specs: {
      'Cantidad': '50 bolsas',
      'Peso por bolsa': '5 gramos',
      'Capacidad': 'Absorbe 40% de su peso',
      'Reutilizable': 'Sí (infinitas veces)',
    },
    whatsappMessage: 'Hola! Quiero el Pack de 50 Bolsas de Sílica Gel de myshusla.com/store',
  },
  {
    id: 'silica-gel-pack-100',
    name: 'Pack 100 Bolsas Sílica Gel',
    description: 'Pack ECONÓMICO 100 bolsas - Ahorra $10 | Para coleccionistas',
    longDescription: 'Nuestro pack más vendido para coleccionistas. 100 bolsas de sílica gel reutilizables = protección para 50 pares de zapatillas (2 bolsas por par). Ahorra $10 vs comprar 2 packs de 50. Ideal para Panamá donde la humedad ataca todo el año.',
    price: 8,
    originalPrice: 10,
    images: [
      '/images/products/silica-gel-100.jpg',
    ],
    category: 'care',
    inStock: true,
    stockQuantity: 35,
    features: [
      '100 bolsas = protege 50 pares',
      'AHORRA $10 vs pack de 50',
      'Indicador de saturación',
      'Reutilizables para siempre',
      'Ideal para colecciones grandes',
      'Best seller',
    ],
    specs: {
      'Cantidad': '100 bolsas',
      'Ahorro': '$10 vs 2 packs de 50',
      'Capacidad': 'Absorbe 40% de su peso',
      'Alcance': 'Protege hasta 50 pares',
    },
    whatsappMessage: 'Hola! Quiero el Pack ECONÓMICO de 100 Bolsas de Sílica Gel de myshusla.com/store',
  },
  {
    id: 'cleaning-kit-basic',
    name: 'Kit Limpieza + Toalla Microfibra',
    description: 'Cepillo premium + toalla microfibra 30x30cm | Lo básico para mantenerlas limpias',
    longDescription: 'Kit esencial de limpieza que incluye cepillo de cerdas suaves profesional y toalla de microfibra de alta absorción. Perfecto para limpiezas rápidas y mantenimiento semanal. El cepillo está diseñado para no dañar materiales delicados.',
    price: 22,
    originalPrice: 28,
    images: [
      '/images/products/cleaning-kit-basic.jpg',
    ],
    category: 'care',
    inStock: true,
    stockQuantity: 30,
    features: [
      'Cepillo cerdas suaves premium',
      'Toalla microfibra 30x30cm',
      'No daña materiales delicados',
      'Perfecto para mantenimiento semanal',
      'Incluye: limpieza gratis (bono)',
      'Calidad profesional',
    ],
    specs: {
      'Cepillo': 'Cerdas naturales suaves',
      'Toalla': 'Microfibra 30x30cm',
      'Bono': '1 limpieza profesional gratis',
      'Uso': 'Semanal / mantención',
    },
    whatsappMessage: 'Hola! Quiero el Kit de Limpieza + Toalla de myshusla.com/store',
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
