// @ts-check
'use strict'

import createEnum from '../../../src/scripts/classes/createEnum.js';

describe('Test EnumFactory', () => {
  test('Create new enum from list', () => {
    const enumInstance = createEnum('value 1', 'value 2', 'value3');
    expect(enumInstance).toHaveProperty('VALUE_1');
    expect(enumInstance).toHaveProperty('VALUE_2');
    expect(enumInstance).toHaveProperty('VALUE3');
    expect(enumInstance.values.length).toBe(3);
  });

  test('Try to edit an enum value', () => {
    const enumInstance = createEnum('value 1', 'value 2', 'value3');
    expect(() => enumInstance.VALUE_1 = 'NEW_VALUE').toThrow();
  });

  test('Try to create a new enum without passing any value', () => {
    expect(() => createEnum()).toThrow();
  });

  test('Try to create a new enum and passing a value that is not a string', () => {
    expect(() => createEnum({}, 'value 1')).toThrow();
  });
});
