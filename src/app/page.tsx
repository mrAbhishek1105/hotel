import { Navbar } from "@/features/navbar/Navbar";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Rooms } from "@/features/rooms/Rooms";
import { Amenities } from "@/features/amenities/Amenities";
import { Experience } from "@/features/experience/Experience";
import { Gallery } from "@/features/gallery/Gallery";
import { Restaurant } from "@/features/restaurant/Restaurant";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { Awards } from "@/features/awards/Awards";
import { FAQ } from "@/features/faq/FAQ";
import { Booking } from "@/features/booking/Booking";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <About />
      <Awards />
      <Rooms />
      <Amenities />
      <Experience />
      <Gallery />
      <Restaurant />
      <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}