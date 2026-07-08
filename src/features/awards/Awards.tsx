"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Building2, Calendar, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AWARDS, STATS } from "@/constants";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-light text-white">
      {count}
      {suffix}
    </span>
  );
}

const statIcons = {
  Building2: Building2,
  Calendar: Calendar,
  Award: Award,
  Users: Users,
};

export function Awards() {
  const { ref: awardsRef, isInView: awardsInView } = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Stats Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons] || Award;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Icon size={28} className="text-gold mx-auto mb-4" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-white/50 text-sm mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <SectionWrapper id="awards" className="bg-cream">
        <div className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-[0.3em] font-medium mb-4 text-gold">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
            Our Awards & Accolades
          </h2>
        </div>

        <div
          ref={awardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-light text-charcoal mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-charcoal/60 mb-2">{award.organization}</p>
              <p className="text-xs text-gold font-medium">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}