import { z } from "zod";

export const bookingSchema = z
  .object({
    arrival: z.date({ message: "Please select an arrival date" }),
    departure: z.date({ message: "Please select a departure date" }),
    guests: z
      .number()
      .min(1, "At least 1 guest required")
      .max(20, "Maximum 20 guests"),
    children: z.number().min(0).max(10).default(0),
    roomType: z.string({ message: "Please select a room type" }),
    specialRequests: z.string().max(500, "Maximum 500 characters").optional(),
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Please enter a valid phone number")
      .max(20, "Please enter a valid phone number"),
  })
  .refine((data) => data.departure > data.arrival, {
    message: "Departure must be after arrival",
    path: ["departure"],
  });

export type BookingSchemaType = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterSchemaType = z.infer<typeof newsletterSchema>;