// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: false,
  plugins: [require('prettier-plugin-tailwindcss')],
};