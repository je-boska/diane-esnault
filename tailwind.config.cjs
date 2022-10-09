/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: ['Homeworld', 'Helvetica'],
      serif: ['KENOKY-Regular', 'Times New Roman'],
      bold: ['KENOKY-Bold', 'Times New Roman'],
    },
    extend: {
      colors: {
        diane: {
          darkestBrown: '#170d02',
          darkBrown: '#301B05',
          brown: '#be8e5f',
          white: '#fff8f0',
          green: '#c0fda1',
          darkGreen: '#c1da98',
          pink: '#c8afab',
        },
      },
    },
  },
  plugins: [],
};
