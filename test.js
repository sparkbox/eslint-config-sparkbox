const assert = require('assert');
const Engine = require('eslint').CLIEngine;

const cli = new Engine({
  configFile: 'index.js',
});

const lint = text => cli.executeOnText(text);

describe('Non-react JS', function() {
  it('Will pass', function() {
    const test = lint(
`const foo = 'foo';
window.location(foo);\n`
  );

    const message = test.errorCount > 0 && test.results[0].messages[0].message;

    assert.equal(test.errorCount, 0, message);
  });
});

describe('React JS', function() {
  it('Will pass', function() {
    const test = cli.executeOnText(
`import React, { Component } from 'react';

export class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>Foo</p>;
  }
}\n`
    );

    const message = test.errorCount > 0 && test.results[0].messages[0].message;

    assert.equal(test.errorCount, 0, message);
  });
});
