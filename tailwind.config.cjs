/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: ['Pyromaani', 'Helvetica'],
      serif: ['Noto Serif', 'Times New Roman'],
    },
    colors: {
      diane: {
        darkBrown: '#301B05',
        brown: '#be8e5f',
        white: '#fff8f0',
        green: '#c0fda1',
        darkGreen: '#c1da98',
        pink: '#c8afab',
      },
    },
    extend: {},
  },
  plugins: [],
};
