/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryText: '#817ffb',
        secondaryText: '#f2f2f2',
      },
      textShadow: {
        outline: '0 0 1px #f2f2f2, 0 0 1px #f2f2f2',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-outline': {
          textShadow: '0 0 0px #f2f2f2, 0 0 0px #f2f2f2',
        },
      });
    },
    require('tailwindcss-filters'),
  ],
};
