/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#E5F5FF",
          20: "#66C2FF",
          30: "#2A93D6",
          40: "#005C99",
          50: "#00548C"
        },
        secondary: {
          10: "#2B4EA1",
          20: "#203B79",
          30: "#152751",
          40: "#0C162D",
          50: "#050D21"
        },
        other: {
          10: "#FFE5ED",
          20: "#FF004C",
          30: "#CC003D"
        },
        neutral: {
          10: "#F2F2F2",
          20: "#DCDEE3",
          30: "#CBCCCD",
          40: "#98999A",
          50: "#6D6E70",
          60: "#434755",
          70: "#151823",
          background: "#F7F9FC",
        }
      },
    },
  },
  plugins: [],
}

