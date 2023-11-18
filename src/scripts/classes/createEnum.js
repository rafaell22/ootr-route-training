//@ts-check
'use strict'

/**
 * @param {any} values[]
 * @returns {object}
 */
export default function createEnum(...values) {
  const enumInstance = {};
  const enumValues = [];
  for(const value of values) {
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
    Object.defineProperty(enumInstance, snakeCaseValue, {
      enumerable: true,
      get: (function(/** @type {string} */enumValue) { return enumValue }).bind(enumInstance, snakeCaseValue),
      set() { throw new Error('Can\'t set property of Enum') },
    });
  }

  Object.defineProperty(enumInstance, 'values', {
    enumerable: false,
    get: (function(/** @type {string[]} */ values){ return values }).bind(enumInstance, enumValues),
    set() { throw new Error('Can\'t set property of Enum') },
  })


  Object.freeze(enumInstance);
  return enumInstance;
}
