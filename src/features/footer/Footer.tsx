"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Heart,
  Send,
  Check,
  ArrowUp,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";
import { newsletterSchema } from "@/schemas/booking";
import { useScrollPosition } from "@/hooks/useScrollPosition";

function BackToTop() {
  const { isScrolled } = useScrollPosition();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={isScrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full gold-gradient shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      newsletterSchema.parse({ email });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: unknown) {
      if (err && typeof err === "object" && "issues" in err) {
        const zodError = err as { issues: Array<{ message: string }> };
        setError(zodError.issues[0]?.message || "Invalid email");
      }
    }
  };

  const handleNavClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BackToTop />

      <footer className="bg-charcoal text-white" role="contentinfo">
        {/* Newsletter */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-xl mx-auto text-center">
              <Star size={24} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-2">
                Join Our Exclusive Circle
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Subscribe to receive exclusive offers, insider updates, and
                curated travel inspiration.
              </p>
              <form
                onSubmit={handleNewsletter}
                className="flex gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                      setError("");
                    }}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder:text-white/30 text-sm"
                    aria-label="Email for newsletter"
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-0 text-red-400 text-xs">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  className="flex-shrink-0"
                >
                  {status === "success" ? (
                    <Check size={18} />
                  ) : (
                    <Send size={18} />
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-light tracking-wider">
                  {SITE_CONFIG.name}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {SITE_CONFIG.description}
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Globe, href: SITE_CONFIG.social.instagram },
                  { icon: Heart, href: SITE_CONFIG.social.facebook },
                  { icon: Star, href: SITE_CONFIG.social.twitter },
                  { icon: Star, href: SITE_CONFIG.social.tripadvisor },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    aria-label={`Visit our social media`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/50 hover:text-gold text-sm transition-colors focus-visible:outline-none focus-visible:text-gold"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gold mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>{SITE_CONFIG.address}</li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-white/70">Check-in:</span>{" "}
                  {SITE_CONFIG.checkIn}
                  <br />
                  <span className="text-white/70">Check-out:</span>{" "}
                  {SITE_CONFIG.checkOut}
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gold mb-6">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button className="text-white/50 hover:text-gold transition-colors focus-visible:outline-none focus-visible:text-gold">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-white/50 hover:text-gold transition-colors focus-visible:outline-none focus-visible:text-gold">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="text-white/50 hover:text-gold transition-colors focus-visible:outline-none focus-visible:text-gold">
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button className="text-white/50 hover:text-gold transition-colors focus-visible:outline-none focus-visible:text-gold">
                    Accessibility
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
              <p>
                &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All
                rights reserved.
              </p>
              <p>
                Crafted with care for unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}