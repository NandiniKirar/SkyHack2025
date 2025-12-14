/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Poppins", "Inter", "sans-serif"],
        body: ["Inter", "Space Grotesk", "sans-serif"]
      },
      colors: {
        cosmic: {
          50: "#f5f3ff",
          100: "#ebe7ff",
          200: "#c9c0ff",
          300: "#a798ff",
          400: "#856ff8",
          500: "#6649e2",
          600: "#4b32b0",
          700: "#36237e",
          800: "#22134c",
          900: "#11081f"
        }
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at top, rgba(103,76,255,0.45), transparent 55%), radial-gradient(circle at 20% 20%, rgba(15,255,212,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,99,233,0.35), transparent 40%), linear-gradient(135deg, #050018, #0b042a 60%, #120b3b)"
      },
      boxShadow: {
        glow: "0 0 25px rgba(129, 94, 255, 0.45)",
        neon: "0 0 35px rgba(15, 255, 212, 0.45)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(103,76,255,0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(15,255,212,0.65)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite"
      }
    }
  },
  plugins: []
};

