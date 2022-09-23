const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'sonarjs', 'import'],
  ignorePatterns: ['*/node_modules/*'],
  rules: {
    camelcase: [0],
    '@typescript-eslint/camelcase': [0],
    'react/react-in-jsx-scope': RULES.OFF,
    semi: ['error', 'always'],
    quotes: [2, 'single'],
    'no-use-before-define': 'off', // because a bux in the Typescript-eslint/parser
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'no-unused-vars': 'off', // because a bux in the Typescript-eslint/parser
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
