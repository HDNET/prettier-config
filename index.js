export default {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
}
