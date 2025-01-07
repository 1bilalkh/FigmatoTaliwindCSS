/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
        'custom-blue': '#1E40AF', // Add a custom blue color
        'custom-green': '#10B981', // Add a custom green color
        'custom-red': '#EF4444', // Add a custom red color
      },
    },
  },
  plugins: [],
}

