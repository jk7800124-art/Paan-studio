export interface MenuItem {
  id: string;
  name: string;
  price: number | string; // Numeric or custom label
  description: string;
  category: 'Premium' | 'Classic' | 'Specialty' | 'Flavored';
  image?: string;
  isPopular?: boolean;
  isExclusive?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
}

