import type { Config } from "tailwindcss";

/**
 * Brand theme for the VIA marketing site.
 * Colors map to CSS variables in styles/globals.css (the single source of truth).
 * Reference via Tailwind utilities or var(--via-*), never raw hex in components.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        paper: "var(--text)",
        dim: "var(--text-muted)",
        purple: {
          DEFAULT: "var(--purple)",
          light: "var(--purple-light)",
        },
        lavender: "var(--lavender)",
        mint: "var(--mint)",
        aqua: "var(--aqua)",
        sky: "var(--sky)",
        peach: "var(--peach)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "75rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        // Brand primary gradient: VIA purple -> growth mint.
        "via-primary":
          "linear-gradient(110deg, var(--purple) 0%, var(--aqua) 100%)",
        // Glow gradient: purple -> lavender.
        "via-glow": "linear-gradient(110deg, var(--purple) 0%, var(--lavender) 100%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
        "dash-pulse": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
