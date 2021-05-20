const { expect } = require('chai');

const { Element: target } = require('../src/domains');

const instance = new target();
const targetName = target.prototype.constructor.name;

describe(`${targetName} instances:`, () => {
  it(`'${targetName}' class exist`, () => {
    expect(target).is.exist;
  });
  it(`'${targetName}' class instance should exist`, () => {
    expect(instance).is.exist;
  });
  it(`'${targetName}' class instance should a type of 'object'`, () => {
    expect(instance).is.an('object');
  });
  it(`'${targetName}' class instance should be an instance of '${targetName}' class`, () => {
    expect(instance).is.an.instanceOf(target);
  });
});
