/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["GT Super DS", "serif"],
        sans: ["TT Commons", "sans-serif"],
      },
      colors: {
        "primary": '#44C4FC',
        "secondary": '#84F4FC',
        "tertiary": '#BCFCFC',
        "surface": '#ECFCFC',
        "dark": '#242526',
        "dark-gray": '#424546',
        "gray": '#D9D9D9',
        "light": '#F4F7FB',
      },
      fontSize: {
        "h1": '6rem',
        "h2": '3.75rem',
        "h3": '3rem',
        "h5": '2.25rem',
        "h6": '2rem',
        "body-lg": '1.5rem',
        "body-md": '1.25rem',
        "body-sm": '1.125rem',
        "btn-lg": '1.25rem',
        "btn-md": '1rem',
        "btn-sm": '0.75rem',
        "caption": '0.75rem',
        "overline": '0.75rem',
        "tips": '0.625rem'
      }
    },
  },
  plugins: [],
};
