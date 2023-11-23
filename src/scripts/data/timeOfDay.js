// @ts-check
'use strict'

import createEnum from '../classes/createEnum.js';

/**
 * @name ages
 * @property {string} DAY
 * @property {string} NIGHT
 */
const timeOfDay = createEnum('day', 'night');

export default timeOfDay;
