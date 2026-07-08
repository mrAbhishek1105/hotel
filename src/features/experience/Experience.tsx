"use client";

import { motion } from "framer-motion";
import { Sunrise, Sun, Sunset, MoonStar, LucideIcon } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { EXPERIENCES } from "@/constants";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, LucideIcon> = {
  Sunrise,
  Sun,
  Sunset,
  MoonStar,
};

function ExperienceTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-gold hidden lg:block" />

      {EXPERIENCES.map((exp, index) => {
        const { ref, isInView } = useInView({ threshold: 0.2 });
        const Icon = iconMap[exp.icon] || Sun;
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={exp.id}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-4 lg:justify-end">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                    {exp.time}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-charcoal mb-3">
                  {exp.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Center icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                <Icon size={28} className="text-white" />
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg image-zoom aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${exp.image})` }}
                  role="img"
                  aria-label={exp.title}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-cream">
      <SectionHeader
        title="A Day at Aurora Haven"
        subtitle="Every moment at our resort is crafted to perfection. From sunrise yoga to stargazing, experience a day filled with luxury and wonder."
      />

      <ExperienceTimeline />
    </SectionWrapper>
  );
}