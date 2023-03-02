module.exports = {
    root: true,
    env: {
        node: true,
        mocha: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended',
    ],
    rules: {
        'vue/no-v-html': 'off',
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
};
