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
      test: '#a503fc',
    },
    extend: {},
  },
  plugins: [],
};
