module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: "double",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/indent": "off",
    "multiline-ternary": "off",
  },
};
