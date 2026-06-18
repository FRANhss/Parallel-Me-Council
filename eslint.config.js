import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules', 'coverage', 'dist', 'tmp'] },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked.map((config) => ({ ...config, files: ['**/*.ts'] })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({ ...config, files: ['**/*.ts'] })),
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.node,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.node,
    },
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
