// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
	semi: true,
	singleQuote: false,
  useTabs: false,
  tabWidth: 2,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
