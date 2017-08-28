module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype"
    ],
    "env": {
      "node": true,
      "browser": true
    },
    "rules": {
      "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
      "react/require-extension": 0,
      "flowtype/define-flow-type": 1,
      "flowtype/use-flow-type": 1,
      "arrow-body-style": [2, "as-needed"],
      "react/no-did-mount-set-state": 0,
      "import/no-mutable-exports": 0,
      "import/no-extraneous-dependencies": 0,
      "no-console": 0,
      "strict": 0,
      "new-cap": [2, {"capIsNewExceptions": ["Router"]}],
      "import/extensions": 0,
      "import/prefer-default-export": 0
    }
}
