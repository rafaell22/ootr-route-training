// @ts-check
'use script'

import createEnum from "../classes/createEnum.js";

const itemTypes = createEnum(
    'consumable',
    'not consumable',
);

/**
 * @name itemTypes
 * @type {object}
 * @property {string} CONSUMABLE
 * @property {string} NOT_CONSUMABLE
 */
export default itemTypes;
