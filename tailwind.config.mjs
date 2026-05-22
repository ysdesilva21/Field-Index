/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F4F0",
        ink: "#1A1A18",
        stone: "#C8C4B5",
        forest: "#2D5A4A",
        amber: "#8C6D3F",
        surface: "#E8E3D8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        soft: "1.25rem",
      },
    },
  },
  plugins: [],
};