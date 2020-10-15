# `@sparkbox/eslint-config-sparkbox`

![current release](https://github.com/sparkbox/eslint-config-sparkbox/workflows/release/badge.svg)

A [sharable ESLint config] that we use at Sparkbox. This config extends the [Airbnb config] and includes rule support for:

* [React](https://github.com/yannickcr/eslint-plugin-react)
* [Flowtype](https://github.com/gajus/eslint-plugin-flowtype)
* [JSX a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [ES6+ imports](https://github.com/benmosher/eslint-plugin-import)

## Usage

`npm install --save-dev @sparkbox/eslint-config-sparkbox`

or

`yarn add @sparkbox/eslint-config-sparkbox --dev`

Use [extends syntax] in your `.eslintrc` file:

```json
{
  "extends": ["@sparkbox/eslint-config-sparkbox"]
}
```

### Install necessary peer dependencies**

`npm i -D eslint`

_Note:_ Depending on your editor setup you may need [eslint-cli](https://github.com/eslint/eslint-cli) installed globally via `npm i eslint-cli -g`.

[sharable ESLint config]: http://eslint.org/docs/developer-guide/shareable-configs
[extends syntax]: http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config
[Airbnb config]: https://github.com/airbnb/javascript
