"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Bed,
  Maximize2,
  Eye,
  X,
  Check,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ROOMS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { Room } from "@/types";

function RoomCard({
  room,
  index,
  onSelect,
}: {
  room: Room;
  index: number;
  onSelect: (room: Room) => void;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-shine"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden image-zoom">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ backgroundImage: `url(${room.images[0]})` }}
          role="img"
          aria-label={room.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-lg font-semibold text-charcoal">
            {formatPrice(room.price)}
            <span className="text-xs text-charcoal/60 font-normal">
              /night
            </span>
          </span>
        </div>
        {room.available && (
          <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs text-white font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Available
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-light text-charcoal group-hover:text-gold transition-colors">
          {room.name}
        </h3>
        <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">
          {room.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-4 text-sm text-charcoal/50">
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {room.capacity} Guests
          </span>
          <span className="flex items-center gap-1.5">
            <Bed size={14} />
            {room.bedType}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} />
            {room.size}m²
          </span>
          <span className="flex items-center gap-1.5">
            <Eye size={14} />
            {room.view}
          </span>
        </div>

        {/* Amenities preview */}
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              className="text-xs bg-beige text-charcoal/70 px-3 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-xs bg-beige text-charcoal/70 px-3 py-1 rounded-full">
              +{room.amenities.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            variant="gold"
            size="sm"
            className="flex-1"
            onClick={() => onSelect(room)}
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() =>
              document
                .querySelector("#booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function RoomModal({
  room,
  onClose,
}: {
  room: Room;
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${room.name} details`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Image gallery */}
          <div className="relative h-80 md:h-96">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${room.images[selectedImage]})` }}
              role="img"
              aria-label={room.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === selectedImage ? "bg-gold w-8" : "bg-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-light text-charcoal">
                  {room.name}
                </h2>
                <p className="text-gold text-lg mt-1">
                  {formatPrice(room.price)}{" "}
                  <span className="text-sm text-charcoal/40">/ night</span>
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal/50">
                <Maximize2 size={14} />
                {room.size}m²
              </div>
            </div>

            <p className="text-charcoal/70 leading-relaxed">
              {room.description}
            </p>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-charcoal/10">
              <div className="text-center">
                <p className="text-2xl font-light text-charcoal">
                  {room.capacity}
                </p>
                <p className="text-xs text-charcoal/50">Guests</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-charcoal">
                  {room.bedType}
                </p>
                <p className="text-xs text-charcoal/50">Bed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-charcoal">
                  {room.view}
                </p>
                <p className="text-xs text-charcoal/50">View</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-charcoal/50 mb-4">
                Amenities
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-charcoal/70"
                  >
                    <Check size={14} className="text-gold flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="gold"
              size="lg"
              className="w-full"
              onClick={() => {
                onClose();
                document
                  .querySelector("#booking")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book This Room <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <SectionWrapper id="rooms" className="bg-white">
      <SectionHeader
        title="Rooms & Suites"
        subtitle="Each of our accommodations is a sanctuary of comfort and elegance, designed to provide the perfect setting for your stay."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOMS.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            index={index}
            onSelect={setSelectedRoom}
          />
        ))}
      </div>

      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </SectionWrapper>
  );
}