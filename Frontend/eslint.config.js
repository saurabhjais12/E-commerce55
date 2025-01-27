import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignore dist folder
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Explicitly setting ecmaVersion to 2020
      globals: globals.browser, // Setting browser globals
      parserOptions: {
        ecmaVersion: 2020, // Use ECMA version 2020
        ecmaFeatures: { jsx: true }, // Enabling JSX
        sourceType: 'module', // Enabling ECMAScript modules
      },
    },
    settings: {
      react: { version: '18' }, // Setting React version to 18.x
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Base ESLint recommended rules
      ...react.configs.recommended.rules, // React-specific rules
      ...react.configs['jsx-runtime'].rules, // JSX runtime rules
      ...reactHooks.configs.recommended.rules, // React Hooks rules
      'react/jsx-no-target-blank': 'off', // Optional, if you need to disable this rule
      'react-refresh/only-export-components': [
        'warn', // Warn when exporting components only
        { allowConstantExport: true }, // Allow constant exports to be ignored
      ],
    },
  },
]
