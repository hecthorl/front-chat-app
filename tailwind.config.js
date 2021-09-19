module.exports = {
   mode: "jit",
   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         gridTemplateColumns: {
            tres: "1fr 2fr 1fr",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require("tailwind-scrollbar")],
};
