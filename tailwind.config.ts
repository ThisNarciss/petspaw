import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "1024px",
      lg: "1440px",
    },
    extend: {
      gridRowStart: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
      },
      gridRowEnd: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
      },
      gridTemplateColumns: {
        "home-columns": "200px 200px 200px",
      },
      gridTemplateRows: {
        threeRows: "140px 140px 140px",
        sixRows: "140px 140px 140px 140px 140px 140px",
        nineRows: "140px 140px 140px 140px 140px 140px 140px 140px 140px",
        twelveRows:
          "140px 140px 140px 140px 140px 140px 140px 140px 140px 140px 140px 140px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/girl-and-pet@1x.png')",
      },
    },
  },
  plugins: [],
};
export default config;
