import {
  Room,
  Amenity,
  Testimonial,
  MenuItem,
  GalleryImage,
  Experience,
  FAQItem,
  NavLink,
  Award,
  Attraction,
  Stat,
} from "@/types";

export const SITE_CONFIG = {
  name: "Aurora Haven",
  tagline: "Where Luxury Meets Tranquility",
  description:
    "Experience unparalleled luxury at Aurora Haven. Nestled in pristine surroundings, our five-star resort offers world-class amenities, exquisite dining, and unforgettable experiences.",
  email: "reservations@aurorahaven.com",
  phone: "+1 (555) 123-4567",
  address: "123 Serenity Lane, Paradise Valley, CA 90210",
  bookingHours: "24/7",
  checkIn: "3:00 PM",
  checkOut: "12:00 PM",
  social: {
    instagram: "https://instagram.com/aurorahaven",
    facebook: "https://facebook.com/aurorahaven",
    twitter: "https://twitter.com/aurorahaven",
    tripadvisor: "https://tripadvisor.com/aurorahaven",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#restaurant" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const ROOMS: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    description:
      "Elegantly appointed king room with panoramic views of the surrounding landscape. Features a marble bathroom with soaking tub and separate rain shower.",
    price: 450,
    capacity: 2,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    ],
    amenities: [
      "King-size Bed",
      "Marble Bathroom",
      "Soaking Tub",
      "Rain Shower",
      "Smart TV",
      "Mini Bar",
      "WiFi",
      "Air Conditioning",
      "In-room Safe",
      "Bathrobes & Slippers",
    ],
    size: 45,
    bedType: "King",
    view: "Garden View",
    available: true,
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description:
      "Spacious suite with separate living area, private terrace, and stunning mountain views. The ultimate in comfort and sophistication.",
    price: 750,
    capacity: 3,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    ],
    amenities: [
      "King-size Bed",
      "Separate Living Area",
      "Private Terrace",
      "Jacuzzi Tub",
      "Walk-in Closet",
      "Smart TV",
      "Mini Bar",
      "Espresso Machine",
      "WiFi",
      "Butler Service",
    ],
    size: 75,
    bedType: "King",
    view: "Mountain View",
    available: true,
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description:
      "Designed for the discerning business traveler. Features a dedicated workspace, premium amenities, and exclusive lounge access.",
    price: 650,
    capacity: 2,
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    amenities: [
      "Queen-size Bed",
      "Work Desk",
      "Ergonomic Chair",
      "Meeting Space",
      "Smart TV",
      "Mini Bar",
      "WiFi",
      "Air Conditioning",
      "Lounge Access",
      "Complimentary Breakfast",
    ],
    size: 55,
    bedType: "Queen",
    view: "City View",
    available: true,
  },
  {
    id: "penthouse",
    name: "Presidential Penthouse",
    description:
      "Our crown jewel. A magnificent two-story penthouse with panoramic views, private pool, and personalized butler service. The epitome of luxury.",
    price: 2500,
    capacity: 6,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    amenities: [
      "Two King Beds",
      "Private Pool",
      "Rooftop Terrace",
      "Home Theater",
      "Fully Stocked Bar",
      "Private Chef",
      "Butler Service",
      "Jacuzzi",
      "Sauna",
      "Private Elevator",
    ],
    size: 200,
    bedType: "King",
    view: "Panoramic Ocean View",
    available: true,
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description:
      "Perfect for families. Two interconnected rooms with a shared living area, kid-friendly amenities, and a dedicated children's play zone.",
    price: 850,
    capacity: 5,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    amenities: [
      "Two Queen Beds",
      "Kids' Play Area",
      "Baby Monitoring",
      "Kitchenette",
      "Smart TV",
      "Mini Bar",
      "WiFi",
      "Board Games",
      "Child-safe Furniture",
      "Babysitting Service",
    ],
    size: 85,
    bedType: "Queen",
    view: "Garden View",
    available: true,
  },
  {
    id: "honeymoon-suite",
    name: "Honeymoon Suite",
    description:
      "A romantic retreat for couples. Features a private balcony with sunset views, champagne on arrival, and a luxurious spa-inspired bathroom.",
    price: 950,
    capacity: 2,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    amenities: [
      "King-size Bed",
      "Private Balcony",
      "Sunset View",
      "Spa Bathroom",
      "Champagne Welcome",
      "Rose Petal Turndown",
      "Smart TV",
      "Mini Bar",
      "Couple's Massage",
      "Private Dining",
    ],
    size: 60,
    bedType: "King",
    view: "Sunset Ocean View",
    available: true,
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "spa",
    name: "World-Class Spa",
    description:
      "Indulge in our award-winning spa featuring a full range of treatments, from traditional massages to modern holistic therapies.",
    icon: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
    category: "Wellness",
  },
  {
    id: "infinity-pool",
    name: "Infinity Pool",
    description:
      "Our stunning infinity pool blends seamlessly with the horizon, offering breathtaking views and a serene swimming experience.",
    icon: "Waves",
    image:
      "https://images.unsplash.com/photo-1570488344391-5475b5b93e6b?w=600",
    category: "Recreation",
  },
  {
    id: "gym",
    name: "Fitness Center",
    description:
      "State-of-the-art fitness center with the latest equipment, personal trainers, and wellness programs tailored to your needs.",
    icon: "Dumbbell",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
    category: "Wellness",
  },
  {
    id: "restaurant",
    name: "Fine Dining Restaurant",
    description:
      "Experience culinary excellence at our signature restaurant, featuring Michelin-starred chefs and an extensive wine collection.",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    category: "Dining",
  },
  {
    id: "conference",
    name: "Conference Hall",
    description:
      "Fully equipped conference facilities with modern technology, perfect for business meetings, conferences, and corporate events.",
    icon: "Presentation",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
    category: "Business",
  },
  {
    id: "airport-pickup",
    name: "Airport Transfer",
    description:
      "Luxury airport transfers in our fleet of premium vehicles, ensuring a seamless journey from arrival to departure.",
    icon: "Car",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600",
    category: "Services",
  },
  {
    id: "wifi",
    name: "High-Speed WiFi",
    description:
      "Complimentary high-speed internet access throughout the property, ensuring you stay connected wherever you are.",
    icon: "Wifi",
    image:
      "https://images.unsplash.com/photo-1573164574001-b58c2f6c0a5d?w=600",
    category: "Services",
  },
  {
    id: "parking",
    name: "Valet Parking",
    description:
      "Secure valet parking with 24/7 surveillance, offering convenience and peace of mind for our guests with vehicles.",
    icon: "ParkingCircle",
    image:
      "https://images.unsplash.com/photo-1555617778-d8e27b28a92a?w=600",
    category: "Services",
  },
  {
    id: "laundry",
    name: "Laundry & Dry Cleaning",
    description:
      "Professional laundry, dry cleaning, and pressing services with same-day delivery for your convenience.",
    icon: "Shirt",
    image:
      "https://images.unsplash.com/photo-1545173168-9fcf1c6c7e3c?w=600",
    category: "Services",
  },
  {
    id: "kids-zone",
    name: "Kids' Club",
    description:
      "Supervised children's activities and play areas with educational programs, ensuring fun for our younger guests.",
    icon: "Baby",
    image:
      "https://images.unsplash.com/photo-1596462215267-b5d5918b84f7?w=600",
    category: "Family",
  },
  {
    id: "pet-friendly",
    name: "Pet-Friendly Services",
    description:
      "We welcome your furry companions with dedicated pet amenities, walking services, and specially prepared pet menus.",
    icon: "PawPrint",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600",
    category: "Services",
  },
  {
    id: "bar",
    name: "Sky Bar & Lounge",
    description:
      "Rooftop bar offering handcrafted cocktails, premium spirits, and panoramic views of the city skyline and beyond.",
    icon: "Wine",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600",
    category: "Dining",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "morning",
    time: "Morning",
    title: "Sunrise Yoga & Breakfast",
    description:
      "Begin your day with guided sunrise yoga on our ocean-view terrace, followed by a curated breakfast featuring locally sourced ingredients and artisanal pastries.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
    icon: "Sunrise",
  },
  {
    id: "afternoon",
    time: "Afternoon",
    title: "Spa & Poolside Luxury",
    description:
      "Spend your afternoon indulging in our world-class spa treatments, lounging by the infinity pool, or exploring curated local excursions and cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600",
    icon: "Sun",
  },
  {
    id: "evening",
    time: "Evening",
    title: "Fine Dining & Sunset Cocktails",
    description:
      "As the sun sets, enjoy handcrafted cocktails at our sky bar followed by an exquisite multi-course dinner at our signature restaurant, where flavors tell a story.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
    icon: "Sunset",
  },
  {
    id: "night",
    time: "Night",
    title: "Stargazing & Sweet Dreams",
    description:
      "Conclude your evening with guided stargazing from our observatory deck, then retreat to your elegantly appointed suite with turndown service and celestial views.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600",
    icon: "MoonStar",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    alt: "Hotel exterior at sunset",
    width: 800,
    height: 1000,
    category: "Exterior",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1570488344391-5475b5b93e6b?w=800&q=80",
    alt: "Infinity pool overlooking ocean",
    width: 800,
    height: 600,
    category: "Pool",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Fine dining restaurant interior",
    width: 800,
    height: 600,
    category: "Dining",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80",
    alt: "Luxury suite bedroom",
    width: 800,
    height: 800,
    category: "Rooms",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "Spa treatment room",
    width: 800,
    height: 600,
    category: "Spa",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    alt: "Presidential suite living area",
    width: 800,
    height: 1000,
    category: "Rooms",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    alt: "Rooftop bar at night",
    width: 800,
    height: 600,
    category: "Dining",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/phone-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Hotel lobby with chandelier",
    width: 800,
    height: 1000,
    category: "Exterior",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    alt: "Hotel garden pathway",
    width: 800,
    height: 600,
    category: "Exterior",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Spa pool",
    width: 800,
    height: 800,
    category: "Spa",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Deluxe bedroom",
    width: 800,
    height: 600,
    category: "Rooms",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Restaurant table setting",
    width: 800,
    height: 1000,
    category: "Dining",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah & Michael Thompson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    text: "Our honeymoon at Aurora Haven was nothing short of magical. The attention to detail, the impeccable service, and the breathtaking views created memories we'll cherish forever. The staff anticipated our every need.",
    country: "United States",
    stayDate: "March 2024",
    roomType: "Honeymoon Suite",
  },
  {
    id: "t2",
    name: "James Whitfield",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: "As a frequent business traveler, I've stayed at many luxury hotels. Aurora Haven sets a new standard. The executive suite was perfect for work, and the conference facilities are world-class. Truly exceptional.",
    country: "United Kingdom",
    stayDate: "February 2024",
    roomType: "Executive Suite",
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    text: "The spa experience at Aurora Haven is transformative. Combined with the exquisite dining and the stunning infinity pool, this is the ultimate wellness destination. I left feeling completely rejuvenated.",
    country: "Spain",
    stayDate: "January 2024",
    roomType: "Premium Suite",
  },
  {
    id: "t4",
    name: "The Kumar Family",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200",
    rating: 5,
    text: "Our family vacation was perfect. The kids' club kept our children entertained while we enjoyed some well-deserved relaxation. The family suite was spacious and thoughtfully designed. We didn't want to leave!",
    country: "India",
    stayDate: "December 2023",
    roomType: "Family Suite",
  },
  {
    id: "t5",
    name: "Pierre Dubois",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    rating: 5,
    text: "A masterpiece of hospitality. From the moment we arrived, we were treated like royalty. The presidential penthouse exceeded all expectations. The private chef experience was unforgettable.",
    country: "France",
    stayDate: "November 2023",
    roomType: "Presidential Penthouse",
  },
  {
    id: "t6",
    name: "Yuki & Kenji Tanaka",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: "We celebrated our anniversary at Aurora Haven and were blown away by the personalized service. The Japanese-inspired spa treatments were incredible, and the attention to cultural details made us feel at home.",
    country: "Japan",
    stayDate: "October 2023",
    roomType: "Deluxe King Room",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Wagyu Beef Tataki",
    description:
      "Seared Japanese Wagyu with truffle ponzu, micro herbs, and crispy shallots",
    price: 48,
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: "m2",
    name: "Lobster Bisque",
    description:
      "Silky lobster bisque with cognac cream, chive oil, and toasted brioche croutons",
    price: 32,
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    dietary: ["Contains Shellfish"],
  },
  {
    id: "m3",
    name: "Tuna Tartare",
    description:
      "Fresh yellowfin tuna with avocado, sesame, ginger, and wonton crisps",
    price: 36,
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: "m4",
    name: "Pan-Seared Scallops",
    description:
      "Diver scallops with cauliflower puree, brown butter, and crispy sage",
    price: 42,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c00d3b39?w=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: "m5",
    name: "Filet Mignon",
    description:
      "Prime 8oz filet with truffle mashed potatoes, roasted vegetables, and red wine jus",
    price: 68,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: "m6",
    name: "Herb-Crusted Rack of Lamb",
    description:
      "New Zealand lamb with rosemary jus, seasonal vegetables, and dauphinoise potatoes",
    price: 72,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=400",
    dietary: [],
  },
  {
    id: "m7",
    name: "Wild Mushroom Risotto",
    description:
      "Arborio rice with wild mushrooms, truffle oil, parmesan, and aged balsamic",
    price: 38,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "m8",
    name: "Chocolate Lava Cake",
    description:
      "Warm dark chocolate cake with vanilla bean ice cream and raspberry coulis",
    price: 24,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    dietary: ["Vegetarian"],
  },
  {
    id: "m9",
    name: "Crème Brûlée",
    description:
      "Classic French vanilla custard with caramelized sugar and fresh berries",
    price: 18,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "m10",
    name: "Artisan Cheese Board",
    description:
      "Selection of fine cheeses with honey, nuts, dried fruits, and artisan crackers",
    price: 34,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1559410544-45d8b52e1c8f?w=400",
    dietary: ["Vegetarian"],
  },
  {
    id: "m11",
    name: "Signature Cocktail - Aurora Bliss",
    description:
      "Vodka, elderflower, fresh lime, cucumber, and sparkling water",
    price: 22,
    category: "Cocktails",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400",
    dietary: ["Gluten-Free", "Vegan"],
  },
  {
    id: "m12",
    name: "Premium Wine - Château Margaux 2015",
    description:
      "Full-bodied Bordeaux with notes of blackcurrant, cedar, and dark chocolate",
    price: 280,
    category: "Wine",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
    dietary: ["Vegan", "Gluten-Free"],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "What time is check-in and check-out?",
    answer:
      "Check-in begins at 3:00 PM and check-out is at 12:00 PM noon. Early check-in and late check-out can be arranged upon request and availability. We also offer luggage storage services if you arrive before your room is ready.",
    category: "Booking",
  },
  {
    id: "f2",
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we provide luxury airport transfer services. Our fleet includes premium sedans, SUVs, and limousines. Please book at least 24 hours in advance by contacting our concierge team. Charges vary based on vehicle choice and distance.",
    category: "Services",
  },
  {
    id: "f3",
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included with our Premium, Executive, and Penthouse suites. For other room categories, breakfast can be added for $35 per person per day. Our breakfast buffet features a wide selection of international and local dishes.",
    category: "Dining",
  },
  {
    id: "f4",
    question: "What is your cancellation policy?",
    answer:
      "We offer free cancellation up to 48 hours before your scheduled arrival. Cancellations within 48 hours will incur a charge of one night's stay. Non-refundable rates are clearly marked during booking. Please refer to your booking confirmation for specific terms.",
    category: "Booking",
  },
  {
    id: "f5",
    question: "Do you have facilities for children?",
    answer:
      "Absolutely! Our Kids' Club offers supervised activities for children aged 4-12, including arts and crafts, outdoor games, and educational programs. We also provide babysitting services, children's menus, and family-friendly room configurations.",
    category: "Family",
  },
  {
    id: "f6",
    question: "Is the hotel pet-friendly?",
    answer:
      "Yes, we welcome well-behaved pets. We offer pet beds, bowls, treats, and a dedicated pet walking area. A one-time cleaning fee of $150 applies. Please inform us at the time of booking so we can prepare your pet-friendly room.",
    category: "Services",
  },
  {
    id: "f7",
    question: "What dining options are available?",
    answer:
      "We offer three dining venues: our signature fine dining restaurant, a casual poolside grill, and the rooftop sky bar & lounge. We also provide 24-hour in-room dining with our full menu. Special dietary requirements can be accommodated with advance notice.",
    category: "Dining",
  },
  {
    id: "f8",
    question: "Do you have spa facilities?",
    answer:
      "Our world-class spa features 8 treatment rooms, a hydrotherapy pool, sauna, steam room, and a relaxation lounge. We offer a wide range of treatments from traditional massages to modern holistic therapies. Advance booking is recommended.",
    category: "Services",
  },
  {
    id: "f9",
    question: "Is parking available?",
    answer:
      "Yes, we offer complimentary valet parking for all guests. Our secure parking facility features 24/7 surveillance and electric vehicle charging stations. Self-parking is also available in our underground garage.",
    category: "Services",
  },
  {
    id: "f10",
    question: "Can I host events or conferences at the hotel?",
    answer:
      "Yes, we have versatile event spaces including a grand ballroom, conference center, and outdoor terraces. Our events team can arrange everything from corporate meetings to weddings. Please contact our events department for a customized proposal.",
    category: "Business",
  },
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "World's Best Luxury Hotel",
    year: 2024,
    organization: "World Travel Awards",
    description:
      "Recognized for exceptional service, stunning architecture, and unparalleled guest experiences.",
    image:
      "https://images.unsplash.com/photo-1579453859152-fb16e413a33a?w=200",
  },
  {
    id: "a2",
    title: "Five-Star Diamond Award",
    year: 2024,
    organization: "American Academy of Hospitality Sciences",
    description:
      "Awarded for outstanding hospitality, luxurious accommodations, and world-class amenities.",
    image:
      "https://images.unsplash.com/photo-1579453859152-fb16e413a33a?w=200",
  },
  {
    id: "a3",
    title: "Best Spa Resort",
    year: 2023,
    organization: "Condé Nast Traveler",
    description:
      "Recognized for innovative wellness programs and exceptional spa facilities.",
    image:
      "https://images.unsplash.com/photo-1579453859152-fb16e413a33a?w=200",
  },
  {
    id: "a4",
    title: "Green Key Eco-Rating",
    year: 2024,
    organization: "Green Key Global",
    description:
      "Achieved for outstanding commitment to environmental sustainability and eco-friendly practices.",
    image:
      "https://images.unsplash.com/photo-1579453859152-fb16e413a33a?w=200",
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: "at1",
    name: "Crystal Beach",
    description:
      "Pristine white sand beach with crystal-clear waters, perfect for swimming and water sports.",
    distance: "0.5 miles",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
    category: "Beach",
  },
  {
    id: "at2",
    name: "Sunset Mountain Trail",
    description:
      "Scenic hiking trail offering panoramic views of the coastline and breathtaking sunsets.",
    distance: "2 miles",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
    category: "Nature",
  },
  {
    id: "at3",
    name: "Heritage Museum",
    description:
      "Discover the rich cultural history of the region through curated exhibits and artifacts.",
    distance: "3 miles",
    image:
      "https://images.unsplash.com/photo-1566125750353-3270c8912a09?w=400",
    category: "Culture",
  },
  {
    id: "at4",
    name: "Royal Golf Club",
    description:
      "Championship 18-hole golf course designed by renowned architects, set against stunning landscapes.",
    distance: "4 miles",
    image:
      "https://images.unsplash.com/photo-1587174486073-ae5eac565b5e?w=400",
    category: "Sports",
  },
  {
    id: "at5",
    name: "Artisan Village",
    description:
      "Charming village featuring local artisans, boutiques, cafes, and traditional crafts.",
    distance: "1.5 miles",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400",
    category: "Shopping",
  },
  {
    id: "at6",
    name: "Botanical Gardens",
    description:
      "Exquisite gardens featuring exotic plants, tranquil ponds, and beautifully landscaped walking paths.",
    distance: "2.5 miles",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400",
    category: "Nature",
  },
];

export const STATS: Stat[] = [
  { label: "Luxury Suites", value: 128, suffix: "+", icon: "Building2" },
  { label: "Years of Excellence", value: 25, suffix: "+", icon: "Calendar" },
  { label: "Awards Won", value: 45, suffix: "+", icon: "Award" },
  { label: "Happy Guests", value: 50000, suffix: "+", icon: "Users" },
];

export const WORKING_HOURS = {
  "Monday - Friday": "8:00 AM - 10:00 PM",
  Saturday: "9:00 AM - 11:00 PM",
  Sunday: "9:00 AM - 9:00 PM",
  "24/7": "Emergency Assistance Available",
};