// @ts-check
'use script'

import Enum from "../classes/Enum.js";

const itemTypes = new Enum(
    'consumable',
    'not consumable',
);

/**
 * @name itemTypes
 * @type {object & Enum}
 * @property {string} CONSUMABLE
 */
export default itemTypes;
