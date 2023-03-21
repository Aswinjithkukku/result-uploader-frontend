/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
           50: "#ECF4FD",
           100: "#E0E8F2",
           200: "#C0C8D2",
           300: "#919EB0",
           400: "#3D485B",
           500: "#232B3A",
           600: "#1E2431",
           700: "#1A202C",
           800: "#151A23",
           900: "#11151C",
        },
        blue: {
           50: "#F4F6FF",
           100: "#b9ddff",
           200: "#C6D2FE",
           300: "#1890FF",
           400: "#2c5afb",
           500: "#194BFB",
           600: "#1744E2",
           700: "#1338BC",
           800: "#0F2D97",
           900: "#010928",
        },
     },
     keyframes: {
        wiggle: {
           "0%, 100%": { transform: "rotate(-1deg)" },
           "50%": { transform: "rotate(1deg)" },
        },
     },
     animation: {
        wiggle: "wiggle 1s ease-in-out ",
     },
    },
  },
  plugins: [],
}