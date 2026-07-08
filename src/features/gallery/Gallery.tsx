"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { GALLERY_IMAGES } from "@/constants";
import { useInView } from "@/hooks/useInView";

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group image-zoom"
      style={{
        gridRow: `span ${Math.ceil(image.height / 200)}`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ backgroundImage: `url(${image.src})` }}
        role="img"
        aria-label={image.alt}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium">{image.category}</p>
      </div>
    </motion.div>
  );
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof GALLERY_IMAGES;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[85vh] w-full h-full p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex].src})`,
            }}
            role="img"
            aria-label={images[currentIndex].alt}
          />
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );
  };

  return (
    <SectionWrapper id="gallery" className="bg-cream">
      <SectionHeader
        title="Our Gallery"
        subtitle="Explore the beauty of Aurora Haven through our curated collection of photographs capturing every exquisite detail."
      />

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((image, index) => (
          <GalleryImage
            key={image.id}
            image={image}
            index={index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </SectionWrapper>
  );
}