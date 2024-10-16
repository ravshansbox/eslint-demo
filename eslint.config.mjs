/* eslint-disable */
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  { files: ['**/*.{js,jsx,ts,tsx}'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  { rules: { 'import/order': 'error' } },
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  { settings: { react: { version: 'detect' } } },
  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
];
