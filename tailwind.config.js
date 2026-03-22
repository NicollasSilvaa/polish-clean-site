/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c', // Charcoal Obsidian
        primary: '#0F172A',    // Navy Blue from logo
        accent: '#F59E0B',     // Yellow/Orange from logo
        surface: '#1E293B',    // Lighter Navy for cards
        textMain: '#F8FAFC',   // Off-white text
        textMuted: '#94A3B8'   // Slate for contrast text
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'], // Clear, technical UI font
        drama: ['Playfair Display', 'serif'], // Elegant serif for "premium" feel
        mono: ['JetBrains Mono', 'monospace'], // Technical font
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, #0a0a0c 10%, transparent 80%)',
      }
    },
  },
  plugins: [],
}
