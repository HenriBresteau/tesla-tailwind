/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        modelY: "url('/assets/asset_0.jpeg')",
        model3: "url('/assets/asset_1.jpeg')",
        modelX: "url('/assets/asset_3.jpeg')",
        powerwalls: "url('/assets/asset_4.jpeg')",
        accessoires: "url('/assets/asset_5.jpeg')",
      },
    },
  },
  plugins: [],
};
