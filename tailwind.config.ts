import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0b1226",
          900: "#101a36",
          800: "#16234a",
          700: "#1e2f63",
        },
        electric: {
          50: "#eef7ff",
          100: "#d9edff",
          400: "#38a4f8",
          500: "#0e87ea",
          600: "#026bc8",
          700: "#0356a2",
        },
        sunrise: {
          50: "#fff8ed",
          100: "#ffefd4",
          400: "#ffa733",
          500: "#fd8a09",
          600: "#e96d00",
        },
        mist: "#f6f8fc",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(16,26,54,0.06), 0 8px 24px rgba(16,26,54,0.08)",
        lift: "0 2px 6px rgba(16,26,54,0.08), 0 16px 40px rgba(16,26,54,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
