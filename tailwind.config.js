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
        'bg-blue-600',
        'bg-purple-600',
        'bg-green-600',
        'bg-indigo-600',
        'bg-red-600',
        'bg-yellow-600',
        'hover:bg-blue-700',
        'hover:bg-purple-700',
        'hover:bg-green-700',
        'hover:bg-indigo-700',
        'hover:bg-red-700',
        'hover:bg-yellow-700',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
