/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4cbfa6",

          secondary: "#f6ebf4",

          accent: "#482673",


          "base-100": "#FFFFFF",

          info: "#301008",

          success: "#2BD4BD",

          warning: "#F4C152",


        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
