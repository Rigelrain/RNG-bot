module.exports =  {
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            "comma-dangle": ['error', {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }],
            'no-cond-assign': ['error', 'always'],
            'no-console': 'off',
            'no-unused-vars': 'error',
            'prefer-const': 'error',
    },
  }; 