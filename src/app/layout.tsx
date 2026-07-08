import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora Haven | Where Luxury Meets Tranquility",
  description:
    "Experience unparalleled luxury at Aurora Haven. A five-star resort offering world-class amenities, exquisite dining, and unforgettable experiences in a breathtaking natural setting.",
  keywords: [
    "luxury hotel",
    "five-star resort",
    "Aurora Haven",
    "luxury accommodation",
    "fine dining",
    "spa resort",
    "premium hotel",
  ],
  authors: [{ name: "Aurora Haven" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurorahaven.com",
    siteName: "Aurora Haven",
    title: "Aurora Haven | Where Luxury Meets Tranquility",
    description:
      "Experience unparalleled luxury at Aurora Haven. A five-star resort offering world-class amenities and exquisite dining.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
        width: 1200,
        height: 630,
        alt: "Aurora Haven Luxury Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Haven | Where Luxury Meets Tranquility",
    description:
      "Experience unparalleled luxury at Aurora Haven. A five-star resort offering world-class amenities and exquisite dining.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://aurorahaven.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Aurora Haven",
              description:
                "Experience unparalleled luxury at Aurora Haven. Nestled in pristine surroundings, our five-star resort offers world-class amenities, exquisite dining, and unforgettable experiences.",
              url: "https://aurorahaven.com",
              telephone: "+1 (555) 123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Serenity Lane",
                addressLocality: "Paradise Valley",
                addressRegion: "CA",
                postalCode: "90210",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                ratingCount: "1250",
              },
              priceRange: "$$$$",
              image:
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Spa" },
                { "@type": "LocationFeatureSpecification", name: "Pool" },
                { "@type": "LocationFeatureSpecification", name: "Gym" },
                { "@type": "LocationFeatureSpecification", name: "Restaurant" },
                { "@type": "LocationFeatureSpecification", name: "Bar" },
                { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
                { "@type": "LocationFeatureSpecification", name: "Parking" },
              ],
              numberOfRooms: 128,
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="skip-link focus-visible:top-0"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}