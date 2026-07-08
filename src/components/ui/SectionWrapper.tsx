"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        dark ? "bg-charcoal text-white" : "bg-white text-charcoal",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  center = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl mb-16 md:mb-20",
        center && "mx-auto text-center"
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "inline-block text-sm uppercase tracking-[0.3em] font-medium mb-4",
          light ? "text-gold" : "text-gold"
        )}
      >
        Aurora Haven
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            "mt-6 text-lg md:text-xl leading-relaxed max-w-2xl",
            center && "mx-auto",
            light ? "text-white/70" : "text-charcoal/60"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}