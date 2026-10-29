import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  formatters: {
    html: true,
    css: true,
  },
  stylistic: {
    semi: true,
    braceStyle: '1tbs',
    jsx: true,
    quotes: 'single',
  },
  rules: {
    'antfu/top-level-function': 'off',
    'unused-imports/no-unused-vars': 'off',
    'react/no-array-index-key': 'off',
    'no-new': 'off',
    'react-refresh/only-export-components': [
      'error',
      {
        allowExportNames: ['metadata'],
      },
    ],
  },
});
