import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blush: "#fff1f4",
          rose: "#ff6b9d",
          berry: "#e0366f",
          cream: "#fff8f3",
          wine: "#8d2047"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(224, 54, 111, 0.18)",
        button: "0 8px 20px rgba(141, 32, 71, 0.22)"
      },
      borderRadius: {
        cute: "1.5rem"
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 9s linear infinite",
        wiggle: "wiggle 1.8s ease-in-out infinite",
        pop: "pop 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28)",
        rise: "rise 3.2s ease-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        drift: {
          "0%": { transform: "translateY(120vh) scale(0.9)", opacity: "0" },
          "15%": { opacity: "0.7" },
          "100%": { transform: "translateY(-20vh) scale(1.15)", opacity: "0" }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" }
        },
        pop: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        rise: {
          "0%": { transform: "translateY(20px) scale(0.8)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-160px) scale(1.1)", opacity: "0" }
        }
      },
      fontFamily: {
        display: ["var(--font-baloo)", "ui-rounded", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
