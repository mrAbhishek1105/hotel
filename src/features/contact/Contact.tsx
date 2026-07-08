"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, WORKING_HOURS } from "@/constants";
import { contactSchema } from "@/schemas/booking";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      if (err && typeof err === "object" && "issues" in err) {
        const zodError = err as { issues: Array<{ path: (string | number)[]; message: string }> };
        const newErrors: Record<string, string> = {};
        zodError.issues.forEach((issue) => {
          const path = issue.path[0] as string;
          newErrors[path] = issue.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-cream">
      <SectionHeader
        title="Get in Touch"
        subtitle="We would love to hear from you. Reach out to us for reservations, inquiries, or any assistance you may need."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <h3 className="text-2xl font-light text-charcoal mb-2">
              Visit Us
            </h3>
            <p className="text-charcoal/60 text-sm">{SITE_CONFIG.description}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Address</p>
                  <p className="text-sm text-charcoal/60">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Phone</p>
                  <p className="text-sm text-charcoal/60">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <p className="text-sm text-charcoal/60">{SITE_CONFIG.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={20} className="text-gold" />
              <h3 className="text-xl font-light text-charcoal">
                Working Hours
              </h3>
            </div>
            <div className="space-y-3">
              {Object.entries(WORKING_HOURS).map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-charcoal/70">{day}</span>
                  <span className="text-charcoal font-medium">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-beige rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                  errors.name ? "border-red-400" : "border-transparent"
                }`}
                placeholder="John Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-beige rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                  errors.email ? "border-red-400" : "border-transparent"
                }`}
                placeholder="john@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-beige rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                  errors.subject ? "border-red-400" : "border-transparent"
                }`}
                placeholder="Reservation Inquiry"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-beige rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none ${
                  errors.message ? "border-red-400" : "border-transparent"
                }`}
                placeholder="Tell us how we can help you..."
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              {isSuccess ? (
                <span className="flex items-center gap-2">
                  <Check size={18} /> Message Sent
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} /> Send Message
                </span>
              )}
            </Button>

            {isSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm text-center"
              >
                Thank you! Your message has been sent successfully. We will get
                back to you shortly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}