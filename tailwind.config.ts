import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        desktop: "url('../../public/bg-curvy-desktop.svg')",
        mobile: "url('../../public/bg-curvy-mobile.svg')",
      },
      fontFamily: {
        heading: ["var(--font-raleway)"],
        body: ["var(--font-open-sans)"],
      },
      colors: {
        "dark-blue1": "#1c2431",
        "dark-blue2": "#181f2a",
        "dark-blue3": "#0b1523",
        "dark-blue4": "#202a3c",
        "cyan-gradient": "#65e2d9",
        "blue-gradient": "#339ecc",
        "light-red": "",
      },
    },
  },
  plugins: [],
};
export default config;
