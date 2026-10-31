import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FFFFFF",
          warm: "#FCFCF9",
          cream: "#FAF9F5",
          sheet: "#F8F8F4",
          card: "#FFFFFF",
        },
        graphite: {
          DEFAULT: "#2D2D2D",
          950: "#111111",
          900: "#1A1A1A",
          800: "#2D2D2D",
          700: "#484848",
          600: "#5E5E5E",
          500: "#747474",
          400: "#9A9A9A",
          300: "#C8C8C8",
          200: "#DCDCD6",
          100: "#EAEAE6",
          50: "#F4F4F0",
        },
        pencil: {
          lead: "#2D2D2D",
          shadow: "#747474",
          light: "#C8C8C8",
          trace: "#E2E2DC",
          grid: "#EAEAE6",
        },
        // Saturated colors strictly for authentic product/project showcases
        loopa: {
          purple: "#7C3AED",
          purpleLight: "#A78BFA",
          lime: "#84CC16",
          limeDark: "#65A30D",
        },
        onescan: {
          cyan: "#06B6D4",
          cyanLight: "#67E8F9",
          pink: "#F43F5E",
          neon: "#EC4899",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "Caveat", "Patrick Hand", "cursive"],
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Space Mono", "monospace"],
      },
      boxShadow: {
        "sketch-sm": "1px 2px 0px rgba(45, 45, 45, 0.08)",
        "sketch": "2px 3px 0px rgba(45, 45, 45, 0.12)",
        "sketch-md": "3px 4px 0px rgba(45, 45, 45, 0.15)",
        "sketch-lg": "4px 6px 0px rgba(45, 45, 45, 0.18)",
        "paper-lift": "0 8px 24px -4px rgba(45, 45, 45, 0.06), 0 2px 6px -1px rgba(45, 45, 45, 0.04)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #EAEAE6 1px, transparent 1px), linear-gradient(to bottom, #EAEAE6 1px, transparent 1px)",
        "grid-dense": "linear-gradient(to right, #F0F0EC 1px, transparent 1px), linear-gradient(to bottom, #F0F0EC 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(#C8C8C8 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;

