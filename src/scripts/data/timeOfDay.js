// @ts-check
'use strict'

import Enum from '../classes/Enum.js';

/**
 * @name ages
 * @property {string} DAY
 * @property {string} NIGHT
 */
const timeOfDay = new Enum('day', 'night');

export default timeOfDay;
