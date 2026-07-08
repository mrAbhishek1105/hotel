"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Presentation,
  Car,
  Wifi,
  ParkingCircle,
  Shirt,
  Baby,
  PawPrint,
  Wine,
  LucideIcon,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AMENITIES } from "@/constants";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Presentation,
  Car,
  Wifi,
  ParkingCircle,
  Shirt,
  Baby,
  PawPrint,
  Wine,
};

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof AMENITIES)[0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const Icon = iconMap[amenity.icon] || Sparkles;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 card-shine"
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-light text-charcoal mb-2">{amenity.name}</h3>
        <p className="text-sm text-charcoal/60 leading-relaxed">
          {amenity.description}
        </p>
        <span className="inline-block mt-4 text-xs uppercase tracking-wider text-gold font-medium">
          {amenity.category}
        </span>
      </div>
    </motion.div>
  );
}

export function Amenities() {
  return (
    <SectionWrapper id="amenities" className="bg-cream">
      <SectionHeader
        title="World-Class Amenities"
        subtitle="Every detail at Aurora Haven is designed to elevate your experience. From rejuvenating spa treatments to exquisite dining, discover a world of luxury at your fingertips."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {AMENITIES.map((amenity, index) => (
          <AmenityCard key={amenity.id} amenity={amenity} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}