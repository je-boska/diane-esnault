/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: 'Pyromaani',
      serif: 'Times New Roman',
    },
    extend: {},
  },
  plugins: [],
};
