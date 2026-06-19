import { MenuItem, Review, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'gold-paan',
    name: 'Gold Paan',
    price: 399,
    description: 'An ultra-luxurious absolute masterpiece wrapped in 100% authentic edible 24k gold leaf, stuffed with organic gulkand, selected dry fruits, saffron, and premium royal spices.',
    category: 'Premium',
    image: '/src/assets/images/gold_paan_1781870495880.jpg',
    isPopular: true,
    isExclusive: true
  },
  {
    id: 'silver-paan',
    name: 'Silver Paan',
    price: 199,
    description: 'An imperial, exquisite blend of premium spices, dates, and sweet gulkand encased in a crisp betel leaf and meticulously coated with premium edible silver foil.',
    category: 'Premium',
    image: '/src/assets/images/silver_paan_1781870507185.jpg',
    isPopular: true,
    isExclusive: true
  },
  {
    id: 'sunday-special',
    name: 'Sunday Special Paan',
    price: 99,
    description: 'Our highly anticipated weekly exclusive, containing secret proprietary spices, luxury fruit compotes, and custom floral essences.',
    category: 'Premium',
    image: '/src/assets/images/paan_special_1781870520779.jpg',
    isPopular: true
  },
  {
    id: 'paan-studio-special',
    name: 'Paan Studio Special',
    price: 70,
    description: 'Our beloved signature creation featuring handpicked tender betel leaf, roasted cashew bits, organic rose petals, and our secret refreshing herbal syrup.',
    category: 'Specialty',
    image: '/src/assets/images/confectionery_gold_1781870570921.jpg',
    isPopular: true
  },
  {
    id: 'dry-fruit-paan',
    name: 'Dry Fruit Paan',
    price: 80,
    description: 'Loaded with a crunch of premium sliced almonds, pistachios, cashews, raisins, and aromatic cardamom seeds, mixed in pure honey.',
    category: 'Specialty'
  },
  {
    id: 'malai-paan',
    name: 'Malai Paan',
    price: 80,
    description: 'A creamy traditional delight featuring a rich, velvety malai essence paired seamlessly with custom cooling spices.',
    category: 'Specialty'
  },
  {
    id: 'chocolate-paan',
    name: 'Chocolate Paan',
    price: 70,
    description: 'A delicious modern fusion coated with rich premium dark chocolate, filled with chocolate chips and chocolate-sweetened betel ingredients.',
    category: 'Flavored'
  },
  {
    id: 'ice-paan',
    name: 'Ice Paan',
    price: 50,
    description: 'An exhilarating burst of fresh coolness. Served at subzero temperatures with sweet crystals that instantly refresh the senses.',
    category: 'Specialty',
    isPopular: true
  },
  {
    id: 'navratan-meenakshi',
    name: 'Navratan Meenakshi Paan',
    price: 50,
    description: 'Nine distinct traditional sweet components blended to perfection with Meenakshi gulkand for a true royal after-meal digestive.',
    category: 'Classic'
  },
  {
    id: 'meetha-meenakshi',
    name: 'Meetha Meenakshi Paan',
    price: 40,
    description: 'Rich sweet Meenakshi-blend gulkand, sweet shredded coconut, and refreshing fennel seeds inside a custom-cured betel leaf.',
    category: 'Classic'
  },
  {
    id: 'flavoured-paan',
    name: 'Flavoured Paan',
    price: 40,
    description: 'Available in premium strawberry, mango, pineapple, and black currant infusions combined with standard sweet ingredients.',
    category: 'Flavored'
  },
  {
    id: 'baba-160-paan',
    name: 'Baba 160 Paan',
    price: 40,
    description: 'A highly aromatic selection featuring the legendary premium Baba 160 spice blend, balanced with sweet digestives.',
    category: 'Classic'
  },
  {
    id: 'meetha-paan',
    name: 'Meetha Paan',
    price: 30,
    description: 'The standard classic sweet paan. Simple, delightful, and timelessly packed with gulkand, tutti-frutti, and sweet mukhwas.',
    category: 'Classic'
  },
  {
    id: 'meenakshi-paan',
    name: 'Meenakshi Paan',
    price: 30,
    description: 'Authentic South Indian digestive cured with subtle sweet spices and traditional cooling elements.',
    category: 'Classic'
  },
  {
    id: 'baba-120-paan',
    name: 'Baba 120 Paan',
    price: 30,
    description: 'Classic rich aromatic blend curated with traditional Baba 120 aromatic spices for depth of flavor.',
    category: 'Classic'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    src: '/src/assets/images/gold_paan_1781870495880.jpg',
    title: 'The 24K Gold Paan',
    description: 'Experience true luxury with edible gold foil wrapped around exquisite traditional ingredients.'
  },
  {
    id: 'gal-2',
    src: '/src/assets/images/silver_paan_1781870507185.jpg',
    title: 'The Elegant Silver Paan',
    description: 'An elegant presentation of premium silver vark, curated for the modern connoisseur.'
  },
  {
    id: 'gal-3',
    src: '/src/assets/images/paan_special_1781870520779.jpg',
    title: 'Paan Studio Signature Special',
    description: 'Our proprietary recipes blending visual perfection with premium elements.'
  },
  {
    id: 'gal-4',
    src: '/src/assets/images/paan_packaging_1781870558810.jpg',
    title: 'Luxury Gift Box Packaging',
    description: 'Elegantly packaged confectionery and sweet boxes, perfect for celebrations, weddings, and gifts.'
  },
  {
    id: 'gal-5',
    src: '/src/assets/images/confectionery_gold_1781870570921.jpg',
    title: 'Royal Mukhwas Confectionery',
    description: 'Exquisite post-meal breath fresheners and sweet seeds curated from high-end spices.'
  },
  {
    id: 'gal-6',
    src: '/src/assets/images/paan_hero_1781870480962.jpg',
    title: 'Imperial Celebration Platters',
    description: 'Grand catering setups tailored for luxury weddings, corporate banquets, and grand festivals.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ramakrishna Prasad Y.',
    rating: 5,
    comment: 'The Gold Paan is an absolute masterpiece! The richness of saffron and dry fruits combined with the beautiful 24k gold leaf presentation is stunning. Truly the most premium paan in Vijayawada.',
    date: '2026-06-12',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Anjali Patnaik',
    rating: 5,
    comment: 'The Silver Paan has such a perfect balance of sweet gulkand and refreshing flavor without being overwhelming. The layout of the shop at Labbipet is beautiful, and their custom luxury gift cases are perfect.',
    date: '2026-06-15',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Vikram Sethi',
    rating: 5,
    comment: 'Exceptional level of hygiene and premium packing. Tried the Ice Paan and Sunday Special Paan. The sub-zero temperature of Ice Paan was an incredible experience. Customer service is top-notch!',
    date: '2026-06-18',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Sireesha K.',
    rating: 4,
    comment: 'Best sweet paan spot in Vijayawada. I ordered their chocolate and dry fruit paan for our housewarming party and the guests were absolutely in love. Highly recommend their delivery on WhatsApp.',
    date: '2026-06-19',
    verified: true
  }
];

export const CONTACT_DETAILS = {
  address: 'Tikkle Road, Opp. Manor Food Plaza, Labbipet, Vijayawada - 520010',
  phone: '+917842978449',
  phoneDisplay: '+91 7842978449',
  instagram: 'paan_studio_',
  instagramUrl: 'https://www.instagram.com/paan_studio_/',
  whatsappUrl: 'https://wa.me/917842978449?text=Hello%20Paan%20Studio%20I%20would%20like%20to%20order...',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.491681283307!2d80.64027771746617!3d16.507204481358988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5247db2afbd%3A0xc6cb1ec2b3d88e02!2sLabbipet%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1718780500000!5m2!1sen!2sin',
};
