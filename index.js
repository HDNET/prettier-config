export default {
    arrowParens: 'avoid',
    bracketSameLine: false,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    overrides: [
      {
        files: '*.json',
        options: {
            parser: 'json'
        }
      }
    ]
}
