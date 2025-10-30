# NutriSight Landing Page

A modern, responsive landing page for NutriSight healthcare management mobile application built with Next.js 16, React 19, Aceternity UI, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Built with Aceternity UI components for premium aesthetics
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion powered animations throughout
- **Premium Components**:
  - Sticky Navigation Bar with blur effect
  - Hero Section with animated phone mockups and gradient backgrounds
  - BentoGrid Features Section
  - Interactive Carousel for Social Proof
  - Gradient CTA Download Section
  - Comprehensive Footer with newsletter signup

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#8B7FDB`
- **Secondary Purple**: `#6B5FB0` / `#7A6FCB`
- **Background**: White with soft purple/lavender gradients
- **Dark Mode**: Full dark mode support

### Typography

- **Font**: Geist Sans (modern, clean sans-serif)
- **Hierarchy**: Bold headlines with clear size differentiation

## 📦 Tech Stack

- **Framework**: Next.js 16
- **React**: React 19
- **Styling**: Tailwind CSS v4
- **UI Library**: Aceternity UI Components
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support

## 🏗️ Project Structure

```
nutrisight-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles with custom utilities
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   ├── HeroSection.tsx  # Hero section with mockups
│   │   ├── FeaturesSection.tsx # Features with BentoGrid
│   │   ├── SocialProofSection.tsx # Carousel section
│   │   ├── DownloadSection.tsx # CTA download section
│   │   └── Footer.tsx       # Footer with newsletter
│   └── ui/                  # Aceternity UI components
├── public/
│   └── images/              # Phone mockup images
│       ├── phone-1.png
│       ├── phone-2.png
│       └── phone-3.png
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd nutrisight-landing-page
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 1. Navigation Bar

- Sticky navigation with blur effect on scroll
- Logo and brand name (NutriSight)
- Navigation menu items
- Animated "Download App" CTA button

### 2. Hero Section

- "Best Medical Service" badge
- Large headline with gradient text
- Email capture form for early access
- Animated floating phone mockups (3 phones)
- Stats card showing "4k+ Happy Clients"
- Spotlight and grid background effects

### 3. Features Section

- Section headline: "Everything You Need. Nothing You Don't."
- BentoGrid layout with 5 feature cards:
  1. Easy Appointment Booking
  2. Instant Telehealth
  3. Digital Health Records (center, larger card with phone mockup)
  4. Health Tracker
  5. Secure & Encrypted
- Each card has icons, descriptions, and "Learn More" links

### 4. Social Proof Section

- Section headline: "Why Thousands Trust NutriSight"
- Interactive carousel with 3 benefit cards:
  1. Chat with Your Doctor
  2. Track Your Medications
  3. Book in 3 Taps
- Left/right navigation
- Progress indicators
- Animated phone mockups

### 5. Download CTA Section

- Purple gradient background with animated elements
- Download headline and description
- "Download APK" button
- Optional QR code placeholder
- Stats display (Downloads, Rating, Active Users, Support)

### 6. Footer

- 4-column layout:
  - Logo, tagline, and social media icons
  - Company links
  - Help links
  - Contact info and newsletter signup
- Dark background (#1a1a1a)
- Copyright notice

## 🎨 Custom Styling

The project includes custom CSS utilities in `globals.css`:

- Smooth scrolling
- Custom purple-themed scrollbar
- Float animation keyframes
- Gradient text utilities
- Button glow effects

## 🔧 Customization

### Changing Colors

Update the primary purple color throughout the components by replacing `#8B7FDB` with your desired color.

### Adding More Sections

Create new section components in `components/sections/` and import them into `app/page.tsx`.

### Modifying Content

All content is in the respective section components - simply edit the text, links, and images as needed.

## 📸 Images

Place your phone mockup images in `/public/images/`:

- `phone-1.png` - Left phone mockup
- `phone-2.png` - Center phone mockup (main)
- `phone-3.png` - Right phone mockup

## 🌐 Deployment

This is a Next.js application and can be deployed to:

- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting platform

## 📄 License

This project is created for NutriSight healthcare management application.

## 👥 Support

For support, email help@curely.app or visit our contact section.

---

Built with ❤️ using Next.js and Aceternity UI
