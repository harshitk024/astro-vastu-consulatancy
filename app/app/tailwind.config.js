// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
