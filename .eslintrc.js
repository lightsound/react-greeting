module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },

  env: {
    browser: true,
    jest: true,
  },

  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],

  plugins: ["@typescript-eslint", "react", "react-hooks"],

  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".tsx", ".ts", ".jsx"] },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.tsx", "*.config.js"],
        optionalDependencies: false,
      },
    ]
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
