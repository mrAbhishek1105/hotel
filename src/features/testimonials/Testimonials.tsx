"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <SectionWrapper id="testimonials" className="bg-charcoal" dark>
      <SectionHeader
        title="What Our Guests Say"
        subtitle="Hear from those who have experienced the magic of Aurora Haven. Their words are our greatest honor."
        light
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[300px] flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/60 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1 px-16 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <Quote size={40} className="text-gold/30 mx-auto mb-6" />

                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${testimonial.avatar})`,
                    }}
                    role="img"
                    aria-label={testimonial.name}
                  />
                  <div className="text-left">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/40 text-sm">
                      {testimonial.country} &middot; {testimonial.stayDate}
                    </p>
                    <p className="text-gold/60 text-xs">
                      {testimonial.roomType}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/60 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-white/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}