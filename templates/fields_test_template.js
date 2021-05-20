const { expect } = require('chai');

const { Element: target } = require('../src/domains');

const targetName = target.prototype.constructor.name;

describe(`${targetName} fields:`, () => {
  const instance = new target();

  const field = {
    key: '',
    value: '',
  };

  field.key = 'null_key';
  field.value = null;
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'null'`, () => {
      expect(instance[field.key]).is.a('null');
    });
  });

  field.key = 'undefined_key';
  field.value = undefined;
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'undefined'`, () => {
      expect(instance[field.key]).is.an('undefined');
    });
  });

  field.key = '';
  field.value = '';
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'string'`, () => {
      expect(instance[field.key]).is.a('string');
    });
    it(`'${field.key}' field should be a type of 'string' with '${field.value}' value`, () => {
      expect(instance[field.key]).to.equal(field.value);
    });
  });

  field.key = 'number_key';
  field.value = 1;
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'number'`, () => {
      expect(instance[field.key]).is.a('number');
    });
    it(`'${field.key}' field should be a type of 'number' with '${field.value}' value`, () => {
      expect(instance[field.key]).to.equal(field.value);
    });
  });

  field.key = 'boolean_key';
  field.value = true;
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'boolean'`, () => {
      expect(instance[field.key]).is.a('boolean');
    });
    it(`'${field.key}' field should be a type of 'boolean' with '${field.value}' value`, () => {
      expect(instance[field.key]).to.equal(field.value);
    });
  });

  field.key = 'array_key';
  field.value = [];
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'object'`, () => {
      expect(instance[field.key]).is.an('object');
    });
    it(`'${field.key}' field should be an instance of 'Array'`, () => {
      expect(instance[field.key]).is.an.instanceOf(Array);
    });
    it(`'${field.key}' field should be an empty array`, () => {
      expect(instance[field.key]).is.empty;
      expect(instance[field.key]).to.have.lengthOf(0);
    });
  });

  field.key = 'object_key';
  field.value = {};
  describe(field.key, () => {
    it(`'${field.key}' field should exist`, () => {
      expect(instance[field.key]).exist;
    });
    it(`'${field.key}' field should be a type of 'object'`, () => {
      expect(instance[field.key]).is.an('object');
    });
    it(`'${field.key}' field should be an instance of 'Object'`, () => {
      expect(instance[field.key]).is.an.instanceOf(Object);
    });
    it(`'${field.key}' field should be an empty object`, () => {
      expect(instance[field.key]).is.empty;
    });
  });
});
