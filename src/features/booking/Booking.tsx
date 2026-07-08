"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Baby, FileText, Check } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ROOMS, SITE_CONFIG } from "@/constants";
import { bookingSchema } from "@/schemas/booking";
import { formatPrice } from "@/lib/utils";

export function Booking() {
  const [formData, setFormData] = useState({
    arrival: "",
    departure: "",
    guests: "2",
    children: "0",
    roomType: "",
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const calculateTotal = () => {
    if (!formData.arrival || !formData.departure || !formData.roomType) return 0;
    const room = ROOMS.find((r) => r.id === formData.roomType);
    if (!room) return 0;
    const arrival = new Date(formData.arrival);
    const departure = new Date(formData.departure);
    const nights = Math.ceil((departure.getTime() - arrival.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? room.price * nights : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (step === 1) {
      if (!formData.arrival || !formData.departure || !formData.roomType) {
        setErrors({
          ...(!formData.arrival && { arrival: "Required" }),
          ...(!formData.departure && { departure: "Required" }),
          ...(!formData.roomType && { roomType: "Required" }),
        });
        return;
      }
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    try {
      bookingSchema.parse({
        ...formData,
        arrival: formData.arrival ? new Date(formData.arrival) : undefined,
        departure: formData.departure ? new Date(formData.departure) : undefined,
        guests: Number(formData.guests),
        children: Number(formData.children),
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({
        arrival: "",
        departure: "",
        guests: "2",
        children: "0",
        roomType: "",
        specialRequests: "",
        name: "",
        email: "",
        phone: "",
      });
      setStep(1);
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

  if (isSuccess) {
    return (
      <SectionWrapper id="booking" className="bg-white">
        <SectionHeader
          title="Book Your Stay"
          subtitle="Reserve your luxury experience at Aurora Haven."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center bg-cream rounded-2xl p-12"
        >
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-white" />
          </div>
          <h3 className="text-2xl font-light text-charcoal mb-4">
            Booking Confirmed!
          </h3>
          <p className="text-charcoal/60 mb-8">
            Thank you for your reservation. A confirmation email with your
            booking details will be sent shortly.
          </p>
          <Button
            variant="gold"
            onClick={() => setIsSuccess(false)}
          >
            Make Another Reservation
          </Button>
        </motion.div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="booking" className="bg-white">
      <SectionHeader
        title="Book Your Stay"
        subtitle="Reserve your luxury experience at Aurora Haven. Select your dates and preferences below."
      />

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="bg-cream rounded-2xl p-8 shadow-lg">
          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s
                      ? "gold-gradient text-white"
                      : "bg-charcoal/10 text-charcoal/40"
                  }`}
                >
                  {s}
                </div>
                <span className="text-sm text-charcoal/60">
                  {s === 1 ? "Details" : "Confirmation"}
                </span>
                {s < 2 && <div className="w-12 h-px bg-charcoal/10" />}
              </div>
            ))}
          </div>

          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    <CalendarDays size={14} className="inline mr-2" />
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={formData.arrival}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        arrival: e.target.value,
                      }))
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                      errors.arrival ? "border-red-400" : "border-transparent"
                    }`}
                    aria-label="Arrival date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    <CalendarDays size={14} className="inline mr-2" />
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={formData.departure}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        departure: e.target.value,
                      }))
                    }
                    min={formData.arrival || new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                      errors.departure ? "border-red-400" : "border-transparent"
                    }`}
                    aria-label="Departure date"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    <Users size={14} className="inline mr-2" />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        guests: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-label="Number of guests"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} Guest{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    <Baby size={14} className="inline mr-2" />
                    Children
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        children: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-label="Number of children"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Child" : "Children"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Room Type
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      roomType: e.target.value,
                    }))
                  }
                  className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.roomType ? "border-red-400" : "border-transparent"
                  }`}
                  aria-label="Room type"
                >
                  <option value="">Select a room type</option>
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - {formatPrice(room.price)}/night
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  <FileText size={14} className="inline mr-2" />
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specialRequests: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Any special requests or requirements..."
                  aria-label="Special requests"
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" variant="gold" onClick={() => setStep(2)}>
                  Continue
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Booking summary */}
              {formData.roomType && (
                <div className="bg-white rounded-xl p-6 space-y-2">
                  <h4 className="text-sm uppercase tracking-wider text-charcoal/50">
                    Booking Summary
                  </h4>
                  <p className="text-charcoal">
                    {ROOMS.find((r) => r.id === formData.roomType)?.name}
                  </p>
                  <p className="text-sm text-charcoal/60">
                    {formData.guests} Guest{Number(formData.guests) > 1 ? "s" : ""}
                    {Number(formData.children) > 0 &&
                      `, ${formData.children} Child${Number(formData.children) > 1 ? "ren" : ""}`}
                  </p>
                  <p className="text-2xl font-light text-gold">
                    {formatPrice(calculateTotal())}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                      errors.name ? "border-red-400" : "border-transparent"
                    }`}
                    placeholder="John Doe"
                    aria-label="Full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                      errors.email ? "border-red-400" : "border-transparent"
                    }`}
                    placeholder="john@example.com"
                    aria-label="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.phone ? "border-red-400" : "border-transparent"
                  }`}
                  placeholder="+1 (555) 123-4567"
                  aria-label="Phone number"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="gold"
                  className="flex-1"
                  isLoading={isSubmitting}
                >
                  Confirm Booking
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </form>
    </SectionWrapper>
  );
}