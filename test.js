const assert = require('assert');
const { ESLint } = require("eslint");

const cli = new ESLint({
  overrideConfigFile: 'index.js',
});

const lint = text => cli.lintText(text);

describe('Non-react JS', function () {
  it('Will pass', async function () {
    const test = await lint(`const foo = 'foo'; window.location(foo);\n`);
    const message = test[0].errorCount > 0 && test[0].messages[0].message;
    assert.equal(test[0].errorCount, 0, message);
  });
});

describe('React JS', function () {
  it('Will pass', async function () {
    const test = await lint(
      `import React, { Component } from 'react';

export class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>Foo</p>;
  }
}
` );
    const message = test[0].errorCount > 0 && test[0].messages[0].message;
    assert.equal(test[0].errorCount, 0, message);
  });
});
