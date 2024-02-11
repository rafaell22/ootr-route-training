// @ts-check
'use strict'

import createEnum from '#classes/createEnum.js';

describe('Test EnumFactory', () => {
  test('Succesfully create new enum from list of values', () => {
    const enumInstance = createEnum('value 1', 'value 2', 'value3');
    expect(enumInstance).toEqual(expect.objectContaining({
      VALUE_1: expect.anything(),
      VALUE_2: expect.anything(),
      VALUE3: expect.anything(),
    }))
  });

  test('Successfully match number of values with number of arguments passed on creation', () => {
    const enumInstance = createEnum('value 1', 'value 2', 'value3');
    expect(enumInstance.length).toBe(3);
  });

  test('Throw error when trying to edit an enum value', () => {
    const enumInstance = createEnum('value 1', 'value 2', 'value3');
    expect(() => enumInstance.VALUE_1 = 'NEW_VALUE').toThrow();
  });

  test('Throw error when trying to create a new enum without passing any value', () => {
    expect(() => createEnum()).toThrow();
  });

  test('Throw error when trying to create a new enum with a value that is not a string', () => {
    expect(() => createEnum(1, 'value 1')).toThrow();
  });

  test('Successfully create enums with the original strings as the values (but not the keys)', () => {
    const enumInstance = createEnum({ useStrValues: true }, 'value 1', 'value 2', 'value3');
    expect(enumInstance).toEqual(expect.objectContaining({
      VALUE_1: 'value 1',
      VALUE_2: 'value 2',
      VALUE3: 'value3',
    }))
  });
});
