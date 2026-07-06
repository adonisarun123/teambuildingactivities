import type { Config } from "tailwindcss";

// Design language: product-first marketplace aesthetic — white surfaces,
// violet accent, warm orange highlights, near-black ink text, soft shadows.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink scale (text / dark surfaces) — keeps the `navy` token name so
        // existing classes re-skin automatically.
        navy: {
          950: "#15151f",
          900: "#1d1d29",
          800: "#3c3c4e",
          700: "#585870",
        },
        // Accent scale (violet) — keeps the `electric` token name.
        electric: {
          50: "#f6f2ff",
          100: "#ece3ff",
          400: "#9b6bfa",
          500: "#7b3ff2",
          600: "#6929d4",
          700: "#5721ad",
        },
        // Warm highlight (ratings/energy) — keeps the `sunrise` token name.
        sunrise: {
          50: "#fff7ec",
          100: "#ffedd1",
          400: "#ffa733",
          500: "#f97d09",
          600: "#e26400",
        },
        mist: "#f8f7fa",
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,21,31,0.05), 0 2px 8px rgba(21,21,31,0.06)",
        lift: "0 4px 12px rgba(21,21,31,0.08), 0 12px 32px rgba(21,21,31,0.12)",
        header: "0 1px 0 rgba(21,21,31,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
