# eslint-config-sparkbox

[![CircleCI](https://circleci.com/gh/sparkbox/eslint-config-sparkbox/tree/master.svg?style=svg)](https://circleci.com/gh/sparkbox/eslint-config-sparkbox/tree/master)

A set of eslint customizations that we use at Sparkbox. This config extends the [Airbnb config] and includes rule support for:

* [React](https://github.com/yannickcr/eslint-plugin-react)
* [Flowtype](https://github.com/gajus/eslint-plugin-flowtype)
* [JSX a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [ES6+ imports](https://github.com/benmosher/eslint-plugin-import)

## Usage

`eslint-config-sparkbox` is designed as an [ESLint Sharable Config]

`npm install --save-dev eslint-config-sparkbox` or `yarn add eslint-config-sparkbox`

Use [extends syntax] in your `.eslintrc` file:

```
{
  "extends": ["sparkbox"]
}
```

_Note:_ Depending on your editor setup you may need the following dependencies installed globally (`-g`) through `npm`.

`npm i eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import eslint-plugin-flowtype babel-eslint --save-dev`

[ESLint Sharable Config]: http://eslint.org/docs/developer-guide/shareable-configs
[extends syntax]: http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config
[Airbnb config]: https://github.com/airbnb/javascript
