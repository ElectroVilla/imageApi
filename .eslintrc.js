module.exports = {
    env: {
        es2021: true,
        commonjs: true,
        node: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        semi: ['error', 'never'],
        'no-console': 'off',
        'no-use-before-define': ['error', { functions: true, classes: true }],
        'prettier/prettier': 1, // Means warning
        'no-var': 'error',
        'prefer-const': 'error'
    }
}