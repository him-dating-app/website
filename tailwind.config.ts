import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        him: {
          purple: {
            dark: "rgb(113 69 116)",
            "dark-40": "rgba(113, 69, 116, 0.4)",
            "dark-60": "rgba(113, 69, 116, 0.6)",
            "dark-67": "rgba(113, 69, 116, 0.67)",
            medium: "rgb(250 207 253)",
            light: "rgb(252 230 255)",
            active: "rgb(71 46 79)",
            inactive: "rgb(168 120 172)",
          },
          orange: {
            light: "#FFE0D3",
          },
          peach: "rgb(253 236 229)",
          primary: "rgb(255 236 230)",
          "primary-dark": "rgb(200 133 116)",
          "primary-light": "rgb(253 245 242)",
          "primary-medium": "rgb(248 223 215)",
          secondary: "#F5F1ED",
          border: "#E5DDD4",
          success: "#7FB069",
          error: "#E63946",
          warning: "#F59E0B",
          text: {
            primary: "#2F251D",
            secondary: "#6B5F53",
            tertiary: "#8B7F73",
            inverse: "#FFFFFF",
          },
          background: {
            primary: "rgb(255 236 230)",
            secondary: "#F8F5F1",
            tertiary: "#F0EBE5",
            overlay: "rgba(47, 37, 29, 0.8)",
            elevated: "#FFFFFF",
            muted: "#F3F4F6",
          },
          neutral: {
            100: "#F8F5F1",
            200: "#F0EBE5",
            300: "#E5DDD4",
            400: "#B8AFA3",
            500: "#8B7F73",
            600: "#6B5F53",
            800: "#2F251D",
          },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "him": "-4px 4px 0px 0px rgb(113 69 116)",
        "him-sm": "-2px 2px 0px 0px rgb(113 69 116)",
        "him-md": "-3px 3px 0px 0px rgb(113 69 116)",
        "him-lg": "-5px 5px 0px 0px rgb(113 69 116)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;