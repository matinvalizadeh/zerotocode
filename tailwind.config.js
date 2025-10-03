/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        vazir: ["Vazir", "sans-serif"],
      },
      colors: {
        // primary:"#f7ba34",
        secondary:"#69a79c",
        light: "#f7f7f7",
        // dark: "#333333",
        // dark2: "#999999",
        primary: "#ff6f61", // نارنجی گرم و زنده، برای دکمه‌ها یا لینک‌ها
        dark: "#2d3436", // متن اصلی تیره و خوانا
        dark2: "#636e72", // سایه‌ها و متن ثانویه
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
