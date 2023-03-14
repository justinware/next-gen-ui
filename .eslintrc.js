const ERROR = 'error';
const NEVER = 'never';
const OFF = 'off';
const AS_NEEDED = 'as-needed';
const ALWAYS = 'always';

module.exports = {
  root: true,
  extends: [
    'airbnb',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       project: './tsconfig.json'
  //     }
  //   }
  // },
  rules: {
    'arrow-parens': [ERROR, AS_NEEDED],
    'comma-dangle': [ERROR, NEVER],
    'import/extensions': [ERROR, NEVER, { 'css': ALWAYS, 'json': ALWAYS }],
    // TODO: Figure this out (how to have this on with TS)
    'import/no-unresolved': OFF,
    'no-nested-ternary': OFF,
    'no-param-reassign': [ERROR, { "props": false }],
    'padded-blocks': OFF,
    // TODO: Figure out the correct settings for this
    'react/function-component-definition': OFF,
    'react/jsx-no-useless-fragment': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-filename-extension': [ERROR, { 'extensions': ['.tsx'] }],
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': OFF
  }
}
