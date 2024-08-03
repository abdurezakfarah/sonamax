import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          content: "hsl(var(--primary-content))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          content: "hsl(var(--secondary-content))",
          dark: "hsl(var(--secondary-dark))",
          light: "hsl(var(--secondary-light))",
        },
        copy: {
          DEFAULT: "hsl(var(--copy))",
          light: "hsl(var(--copy-light))",
          lighter: "hsl(var(--copy-lighter))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          content: "hsl(var(--info-content))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          content: "hsl(var(--success-content))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          content: "hsl(var(--warning-content))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          content: "hsl(var(--error-content))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          ...fontFamily.serif,
        ],
        title: [
          "var(--font-title)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          ...fontFamily.serif,
        ],
      },
      backgroundImage: {
        blob: "url('/assets/images/background/blob.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.86, 0, 0.07, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // require("tailwind-scrollbar")({
    //   nocompatible: true,
    //   preferredStrategy: "pseudoelements",
    // }),
  ],
} satisfies Config;

export default config;
