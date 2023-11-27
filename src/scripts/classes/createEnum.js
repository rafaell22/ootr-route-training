//@ts-check
'use strict'

/**
 * @param {string[]} values[]
 * @returns {object}
 * @throws
 */
export default function createEnum(...values) {
  if(values.length === 0) {
    throw new Error('Cannot create empty enum');
  }

  const enumInstance = {};
  const enumValues = [];
  for(const value of values) {
    if(typeof value !== 'string') {
      throw new Error(`Invalid value in enum: ${value}`);
    }

    const snakeCaseValue = value
      // replace spaces ( ) with underscores (_)
      .replace(/ /g, '_')
      // Add underscores before uppercase letters (to separate words)
      .replace(/(?<=[a-z])[A-Z]/g, (match) => { return `_${match}` })
      // replace lower case letters with their uppercase versions
      .replace(/[a-z]/g, (match) => { return match.toUpperCase() })
      // remove any repeated underscores
      .replace('__', '_')
      // remove underscore from start of string if any
      .replace(/^_/, '');

    enumValues.push(snakeCaseValue);
    const enumUuidValue = crypto.randomUUID();
    Object.defineProperty(enumInstance, snakeCaseValue, {
      enumerable: true,
      get: (function(/** @type {string} */enumValue) { return enumValue }).bind(enumInstance, enumUuidValue),
      set() { throw new Error('Can\'t set property of Enum') },
    });
  }

  Object.defineProperty(enumInstance, 'values', {
    enumerable: false,
    get: (function(/** @type {string[]} */ values){ return values }).bind(enumInstance, enumValues),
    set() { throw new Error('Can\'t set property of Enum') },
  })

  Object.defineProperty(enumInstance, 'length', {
    enumerable: false,
    get: (function( /** @type {number} */ length) { return length }).bind(enumInstance, enumValues.length),
    set() { throw new Error('Can\'t set Enum\'s length') },
  })


  Object.freeze(enumInstance);
  return enumInstance;
}
