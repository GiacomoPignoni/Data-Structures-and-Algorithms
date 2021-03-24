module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["warn", "double"],
        "keyword-spacing": ["warn", { "before": true }],
        "semi": ["error", "always"],
        "no-var": ["error"],
        "prefer-const": ["warn"],
        "spaced-comment": ["warn", "always"],
        "eqeqeq": ["warn", "always"],
        "no-trailing-spaces": "warn",
        "eol-last": ["warn", "always"]
    }
};
