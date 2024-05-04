/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors:{
        'primary':'#437EF7',
        'bgColor':"#F8F9FB",
        'stale':"#5F6D7E"
      }
    },
  },
  plugins: [],
};
