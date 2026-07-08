"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  magnetic?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      magnetic = false,
      children,
      disabled,
      onClick,
      type = "button",
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-charcoal text-white hover:bg-charcoal/90 shadow-lg shadow-black/10",
      secondary: "bg-beige text-charcoal hover:bg-beige/80",
      outline:
        "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
      ghost: "text-charcoal hover:bg-charcoal/5",
      gold: "bg-gold text-white hover:bg-gold/90 shadow-lg shadow-gold/20",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={magnetic ? { scale: 1.05 } : { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </motion.div>
        )}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };