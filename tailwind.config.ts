import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "1500px": "1500px",
        "1800px": "1800px",
        "1250px": "1250px",
        "900px": "900px",
        "450px": "450px",
        "545px": "545px",
        "580px": "580px",
        "695px": "695px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise: "url('/noise.png')",
      },
    },
    fontFamily: {
      Inter: ["var(--inter)"],
      bungee: ["var(--bungee)"],
      alfa: ["var(--alfa)"],
    },
  },
  plugins: [],
};
export default config;
