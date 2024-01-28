module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended'
    ],
    overrides: [
      {
        env: {
          node: true
        },
        files: [
          '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint',
      'react'
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React to be in scope
      'react/jsx-uses-react': 'off', // React 17+ doesn't require React to be imported when using JSX
      // Add other rule configurations here as necessary
    }
  }
  