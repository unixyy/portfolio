/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes : [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#9333ea",
          "secondary": "#f3f4f6",
          "accent": "#a78bfa",
          "neutral": "#f3f4f6",
          "base-100": "#f3f4f6",
          "info": "#fde047",
          "success": "#008b26",
          "warning": "#fb923c",
          "error": "#e90037",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#9333ea",
          "secondary": "#f3f4f6",
          "accent": "#a78bfa",
          "neutral": "#f3f4f6",
          "base-100": "#27272A",
          "info": "#fde047",
          "success": "#008b26",
          "warning": "#fb923c",
          "error": "#e90037",
        },
      }
    ]
  },
  plugins: [require("daisyui")],
}

