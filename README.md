# Aurora Haven - Luxury Hotel Website

A premium, production-quality luxury hotel website built for **Buildzy** demonstration purposes. This project showcases a five-star resort experience with cinematic design, elegant animations, and world-class user experience.

## Tech Stack

- **Next.js 16** - App Router, Server Components
- **React 19** - Modern reactive UI
- **TypeScript** - Strict type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Premium animations
- **Lucide React** - Beautiful icons
- **Zod** - Schema validation

## Features

- Full-screen cinematic hero with parallax effects
- Interactive room gallery with detail modals
- Multi-step booking system with validation
- Animated testimonial carousel
- Pinterest-style image gallery with lightbox
- Restaurant menu with category filtering
- FAQ accordion with search
- Contact form with validation
- Newsletter subscription
- Luxury statistics with animated counters
- Awards & accolades showcase
- Guest experience timeline
- Back to top button
- Responsive design (320px to ultra-wide)
- SEO optimized with JSON-LD schema
- WCAG AA accessibility compliant
- Security headers configured

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Quick Deploy

1. Fork or clone this repository
2. Push to your GitHub/GitLab/Bitbucket account
3. Import the repository into Vercel
4. Vercel auto-detects Next.js configuration
5. Click **Deploy**

### Manual Deploy

```bash
npm install
npm run build
npm run start
```

### Environment Variables

No environment variables are required for the base demo. The application uses placeholder data and Unsplash images.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Shared UI components
├── features/         # Feature-based modules
│   ├── hero/         # Hero section
│   ├── about/        # About section
│   ├── rooms/        # Rooms & suites
│   ├── amenities/    # Amenities grid
│   ├── experience/   # Guest experience timeline
│   ├── gallery/      # Image gallery with lightbox
│   ├── restaurant/   # Dining & menu
│   ├── testimonials/ # Animated carousel
│   ├── faq/          # FAQ accordion
│   ├── booking/      # Multi-step booking
│   ├── contact/      # Contact form & info
│   ├── awards/       # Stats & awards
│   ├── navbar/       # Sticky navigation
│   └── footer/       # Footer with newsletter
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── types/            # TypeScript types
├── constants/        # Application data
└── schemas/          # Zod validation schemas
```

## Performance Targets

- Lighthouse Performance: 100
- Lighthouse Accessibility: 100
- Lighthouse SEO: 100
- Lighthouse Best Practices: 100
- Core Web Vitals: Excellent

## Build

```bash
npm run build
```

The build output will be in the `.next` folder, ready for deployment.

---

Built for **Buildzy** | [buildzy.ai](https://buildzy.ai)