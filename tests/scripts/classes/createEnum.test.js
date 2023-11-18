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
  })
});
