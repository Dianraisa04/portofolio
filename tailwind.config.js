/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          bg: '#E8ECE5',
          border: '#CDD5CA',
          light: '#F0F3EE',
          dark: '#B8C2B3',
        },
        charcoal: {
          DEFAULT: '#29332D',
          muted: '#5D665D',
          light: '#7B847C',
        },
        forest: {
          DEFAULT: '#45634F',
          hover: '#37503F',
          active: '#2E4334',
          subtle: '#E2ECE4',
          border: '#A8BEAF',
        },
        surface: {
          DEFAULT: '#F6F7F3',
          card: '#F6F7F3',
          elevated: '#FFFFFF',
          muted: '#EDF1EB',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(41, 51, 45, 0.06), 0 1px 4px -1px rgba(41, 51, 45, 0.04)',
        'card': '0 4px 20px -4px rgba(41, 51, 45, 0.07)',
        'card-hover': '0 12px 30px -6px rgba(41, 51, 45, 0.12), 0 4px 10px -2px rgba(41, 51, 45, 0.04)',
      },
    },
  },
  plugins: [],
}
