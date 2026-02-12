# Bapasitaram Consultant - Engineering Excellence Website

A modern, professional engineering consultant website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Distinctive Design**: Refined aesthetic with luxury serif typography (Playfair Display) and sophisticated animations
- ⚡ **Performance**: Built on Next.js 14 with App Router for optimal performance
- 📱 **Responsive**: Fully responsive design that works seamlessly across all devices
- 🎭 **Animations**: Smooth Framer Motion animations for engaging user experience
- 🎯 **SEO Optimized**: Built-in metadata and semantic HTML structure

## Design Highlights

- **Color Palette**: Navy blue and gold accent colors conveying trust and excellence
- **Typography**: Playfair Display for headings (elegant serif) + Work Sans for body (clean sans-serif)
- **Animations**: Page load reveals, hover effects, and scroll-triggered animations
- **Layout**: Clean, asymmetric compositions with generous whitespace
- **Visual Effects**: Subtle grain texture overlay, gradient backgrounds, glass morphism effects

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Work Sans)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
bapasitaram-consultant/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Sections

1. **Hero Section**: Impactful introduction with company stats
2. **Services**: 4 core service offerings with hover interactions
3. **Projects**: Featured project showcase
4. **About**: Company background and certifications
5. **Contact**: Contact form and business information
6. **Footer**: Social links and copyright

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  navy: { ... },
  gold: { ... },
}
```

### Content
Update text content in `app/page.tsx`:
- Services array
- Projects array
- Stats array
- Contact information

### Fonts
Change fonts in `app/globals.css` by updating the Google Fonts import

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## License

This project is created for Bapasitaram Consultant.

## Support

For questions or support, contact: info@bapasitaram.com
