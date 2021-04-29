module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    options: {
      safelist: [
        'focus:bg-blue-600',
        'focus:bg-purple-600',
        'focus:bg-green-600',
        'focus:bg-indigo-600',
        'focus:bg-red-600',
        'focus:bg-yellow-600',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
