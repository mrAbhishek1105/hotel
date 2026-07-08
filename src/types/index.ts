export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
  size: number;
  bedType: string;
  view: string;
  available: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  country: string;
  stayDate: string;
  roomType: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  dietary: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

export interface Experience {
  id: string;
  time: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  arrival: Date | undefined;
  departure: Date | undefined;
  guests: number;
  children: number;
  roomType: string;
  specialRequests: string;
  name: string;
  email: string;
  phone: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  description: string;
  image: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
  category: string;
}

export interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}