import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      //should give an error, maximum of 1 empty line, 0 empty lines at the end of the file
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      //should give an error, all variables must be in camelcase (also object properties)
      camelcase: ['error', { properties: 'always' }],
    },
  },
])
