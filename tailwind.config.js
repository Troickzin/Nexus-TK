/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          "primary-color": "#16A98B",
          "secundary-color": "#9747FF",
          error: "#74262B",
          sucess: "#35765E",
          dark: {
            50: "#262626",
            100: "#202020",
            200: "#1B1B1B",
            300: "#161616",
            400: "#121212",
            500: "#0F0F0F",
            600: "#0C0C0C",
          },
          white: {
            50: "#BDC3D4",
            100: "#9CA1B0",
            200: "#7F8494",
            300: "#7B7F8C",
            400: "#5A5E68",
            500: "#3A3C43",
            600: "#333844",
          },
          green: {
            50: "#F0FDF9",
            100: "#CDFAEC",
            200: "#9BF4DB",
            300: "#61E7C5",
            400: "#31D0AD",
            500: "#16A98B",
            600: "#10917A",
            700: "#117463",
            800: "#135C51",
            900: "#144D44",
            950: "#052E29",
            1000: "#9747FF",
          },
          // primary: {color: "#16A98B"},
          // secundary: {color: "#9747FF"}
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        alexandria: ["Alexandria", "sans-serif"],
      },
      boxShadow: {
        shadownex: "0px 0px 30px 0px #0b0b0bb0",
        "nexus-s5": "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
        "nexus-s10": "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
        "nexus-s15": "0px 0px 15px 0px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        newsping: "newsping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        sobd: "sobedesce 60s ease infinite",
        dess: "descesobe 60s ease infinite",
      },
      keyframes: {
        newsping: {
          "75%, 100%": {
            transform: "scale(1.25)",
            opacity: "0",
          },
        },
        sobedesce: {
          "50%": { transform: "translateY(5%)" },
          "0%, 100%": { transform: "translateY(-5%)" },
        },
        descesobe: {
          "0%, 100%": { transform: "translateY(20%)" },
          "50%": { transform: "translateY(0%)" },
        },
      },
      screens: {
        "2sm": "820px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {},
};
