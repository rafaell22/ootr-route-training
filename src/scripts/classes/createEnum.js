//@ts-check
'use strict'
import crypto from 'crypto';

/**
 * By default the function uses a uuidv4 as the enum value. To change that, use the available options: 
 *   - useStrValues - use UPPER_SNAKE_CASE as keyand keep original string as value
 *   - useIntValues - use UPPER_SNAKE_CASE as key and integer sequential as values
 * @param {Array<string|object>} parameters[]
 * @returns {object}
 * @throws
 */
export default function createEnum(...parameters) {
  if(parameters.length === 0) {
    throw new Error('Cannot create empty enum');
  }

  let options = {};
  let values = parameters;
  if(typeof values[0] === 'object') {
    options = parameters[0];
    values = parameters.slice(1);
  }

  const enumInstance = {};
  const enumKeys = [];
  for(const value of values) {
    if(typeof value !== 'string') {
      throw new Error(`Invalid value in enum: ${value}`);
    }

    const snakeCaseValue = toUpperSnakeCase(value);
    enumKeys.push(snakeCaseValue);

    /** @type {string|number} */
    let enumValue = crypto.randomUUID();
    if(options.useStrValues) {
      enumValue = value;
    }
    if(options.useIntValues) {
      enumValue = enumKeys.length - 1;
    }

    Object.defineProperty(enumInstance, snakeCaseValue, {
      enumerable: true,
      get: (function(/** @type {string} */enumValue) { return enumValue }).bind(enumInstance, enumValue),
      set() { throw new Error('Can\'t set property of Enum') },
    });
  }

  Object.defineProperty(enumInstance, 'values', {
    enumerable: false,
    get: (function(/** @type {string[]} */ values){ return values }).bind(enumInstance, enumKeys),
    set() { throw new Error('Can\'t set property of Enum') },
  })

  Object.defineProperty(enumInstance, 'length', {
    enumerable: false,
    get: (function( /** @type {number} */ length) { return length }).bind(enumInstance, enumKeys.length),
    set() { throw new Error('Can\'t set Enum\'s length') },
  })


  Object.freeze(enumInstance);
  return enumInstance;
}

/**
 *
 * Converts string to uppercase snake case
 * Examples:
 *   - toUpperSnakeCase('dog') = 'DOG'
 *   - toUpperSnakeCase('brown dog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('brownDog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('brown__dog') = 'BROWN_DOG'
 *   - toUpperSnakeCase('__dog') = 'DOG'
 * @param {string} str
 * @returns {string}
 */
function toUpperSnakeCase(str) {
  return str
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
}
