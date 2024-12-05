/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          "primary-color": "#16A98B",
          "secundary-color": "#9747FF",
          bg: {
            50: "#262626",
            100: "#202020",
            200: "#1B1B1B",
            300: "#161616",
            400: "#121212",
            500: "#0F0F0F",
            600: "#0C0C0C",
          },
          txt: {
            50: "#BDC3D4",
            100: "#9CA1B0",
            200: "#7F8494",
            300: "#7B7F8C",
            400: "#5A5E68",
            500: "#3A3C43",
            600: "#333844",

            error: "#74262B",
            sucess: "#35765E",
          },
          eft: {
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
        "shadow-nexus-s10": "0px 0px 15px 0px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        sobd: "sobedesce 60s ease infinite",
        dess: "descesobe 60s ease infinite",
        "helice-rotate": "helice_rotate 0.013s linear infinite",

        "heli-descesobe": "heli_descesobe 20s ease infinite",
        "heli-sobedesce": "heli_sobedesce 20s ease infinite",
      },
      keyframes: {
        sobedesce: {
          "50%": { transform: "translateY(20%)" },
          "0%, 100%": { transform: "translateY(0%)" },
        },
        descesobe: {
          "0%, 100%": { transform: "translateY(20%)" },
          "50%": { transform: "translateY(0%)" },
        },
        heli_descesobe: {
          "0%": { transform: "translateY(0%) translateX(0%)" },
          "25%": { transform: "translateY(-30%) translateX(-10%)" },
          "50%": { transform: "translateY(-10%) translateX(10%)" },
          "75%": { transform: "translateY(20%) translateX(30%)" },
          "100%": { transform: "translateY(0%) translateX(0%)" },
        },

        heli_sobedesce: {
          "100%": { transform: "translateY(0%) translateX(0%)" },
          "75%": { transform: "translateY(-30%) translateX(-10%)" },
          "50%": { transform: "translateY(-10%) translateX(10%)" },
          "25%": { transform: "translateY(20%) translateX(30%)" },
          "0%": { transform: "translateY(0%) translateX(0%)" },
        },
        helice_rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1660px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "cupcake"],
  },
};
