# Kika Oshodin Care Foundation Website

A Next.js website for the Kika Oshodin Care Foundation, converted from a single HTML page while preserving the exact design and styling.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   ├── HeroSection.tsx      # Hero section with illustration
│   │   ├── StatsBar.tsx         # Statistics bar
│   │   ├── MissionSection.tsx   # Mission and values section
│   │   ├── KikaGallery.tsx      # Photo gallery of Kika (NEW)
│   │   ├── VideoSection.tsx     # Video showcase section
│   │   ├── OutreachSection.tsx  # Outreach programs section
│   │   ├── DonateSection.tsx    # Donation section (interactive)
│   │   └── Footer.tsx           # Footer with links
│   ├── globals.css              # All styles from original HTML
│   ├── layout.tsx               # Root layout with fonts
│   └── page.tsx                 # Main page component
├── public/
│   └── README.md                # Instructions for adding images
├── package.json
├── tsconfig.json
└── next.config.js
```

## Adding Kika's Images & Video

The website includes a beautiful photo gallery section for Kika Oshodin and an interactive video player. To add media:

### Images:
1. Place 3 images in the `public` folder:
   - `kika-hero.jpg` - Main featured image (800x1200px recommended)
   - `kika-1.jpg` - Gallery image 1 (600x600px recommended)
   - `kika-2.jpg` - Gallery image 2 (600x600px recommended)

### Video:
2. Place your outreach video in the `public` folder:
   - `palliative.mp4` - Outreach video (MP4 format, H.264 codec)
   - Recommended: 1920x1080 or 1280x720 resolution
   - Keep under 50MB for optimal performance

3. The images will automatically appear in the gallery with elegant overlays and captions
4. The video will play in an interactive player with custom controls

5. See `public/README.md` for detailed media guidelines

## Features

- Fully responsive design
- Interactive donation amount selector
- Beautiful photo gallery for Kika Oshodin with 3 image slots
- Interactive video player with custom controls for outreach video
- Smooth animations and transitions
- Custom SVG illustrations
- Sticky navigation
- Next.js Image optimization for fast loading
- HTML5 video player with play/pause functionality
- All original styles preserved

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS (no Tailwind, using original styles)

## Build for Production

```bash
npm run build
npm start
```

## Original Design

This project was converted from a single HTML file while maintaining 100% design fidelity.
