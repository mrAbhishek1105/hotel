"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Award-winning luxury accommodations",
  "World-class spa and wellness facilities",
  "Michelin-starred dining experiences",
  "Breathtaking natural surroundings",
  "Personalized butler service",
  "Curated local experiences",
];

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <SectionWrapper id="about" className="bg-cream">
      <SectionHeader
        title="A Legacy of Luxury"
        subtitle="Nestled in the heart of paradise, Aurora Haven has been redefining luxury hospitality for over two decades. Every detail, from our architecture to our service, is crafted to create an unforgettable experience."
      />

      <div
        ref={ref}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80)`,
              }}
              role="img"
              aria-label="Luxury hotel suite interior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block"
          >
            <p className="text-4xl font-light text-charcoal">25+</p>
            <p className="text-sm text-charcoal/60">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal/70 leading-relaxed"
          >
            At Aurora Haven, we believe luxury is not just about opulence—it's
            about creating meaningful moments that stay with you forever. Our
            dedicated team of professionals works tirelessly to ensure every
            aspect of your stay exceeds expectations.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm text-charcoal/70">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="gold"
              onClick={() =>
                document
                  .querySelector("#experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}