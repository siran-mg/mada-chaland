/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a5da6",
        onPrimary: "#FFFFFF",
        secondary: "#B3261E",
        onSecondary: "#FFFFFF",
        surface: "#FFFBFE",
        onSurace: "#000000",
      },
    },
  },
  plugins: [],
};
