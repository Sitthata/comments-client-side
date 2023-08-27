module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // Hook-specific rules
    'airbnb-typescript' 
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // if your tsconfig file is not in your project root, adjust the path accordingly
  },
  plugins: ['react-refresh', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // Not needed with modern React
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }], // Allow JSX in .tsx files
    '@typescript-eslint/explicit-module-boundary-types': 'off', // This is up to your team's discretion
  },
};