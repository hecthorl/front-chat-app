// prettier-ignore
/* eslint-disable */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "standard",
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    
    "rules": {
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        indent: 0,
        'no-unused-vars': 'warn',
        'multiline-ternary': 0,
        'space-before-function-paren': 0
    }
}
