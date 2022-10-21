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
        modelY: "url('./src/assets/asset_0.jpeg')",
        model3: "url('./src/assets/asset_1.jpeg')",
        modelX: "url('./src/assets/asset_3.jpeg')",
        powerwalls: "url('./src/assets/asset_4.jpeg')",
        accessoires: "url('./src/assets/asset_5.jpeg')",
      },
    },
  },
  plugins: [],
};
