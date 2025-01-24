/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2F3B2F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E4B04A",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F0E6",
          foreground: "#2F3B2F",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ayurveda: {
          light: '#F5E6D3',
          DEFAULT: '#E2D1C3',
          dark: '#2F3B2F',
          accent: '#E4B04A',
          text: '#331A11'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#2F3B2F',
            h1: {
              color: '#2F3B2F',
            },
            h2: {
              color: '#2F3B2F',
            },
            h3: {
              color: '#2F3B2F',
            },
            strong: {
              color: '#2F3B2F',
            },
            a: {
              color: '#E4B04A',
              '&:hover': {
                color: '#c99b3f',
              },
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'leaf-fall': 'fall 10s linear infinite',
        'plant-grow': 'grow 2s ease-out forwards',
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
        'slow-spin': 'slowSpin 20s linear infinite',
        'fade-in-out': 'fadeInOut 4s ease-in-out infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
        grow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate")
  ],
} 