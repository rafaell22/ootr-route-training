// @ts-check
'use strict'

import createEnum from "../classes/createEnum.js";

/**
 * @name dungeonRewards
 * @property {string} KOKIRI_EMERALD
 * @property {string} GORON_RUBY
 * @property {string} ZORA_SAPPHIRE
 * @property {string} FOREST_MEDALION
 * @property {string} FIRE_MEDALION
 * @property {string} WATER_MEDALION
 * @property {string} SHADOW_MEDALION
 * @property {string} SPIRIT_MEDALION
 * @property {string} LIGHT_MEDALION
 */
const dungeonRewards = createEnum(
    'kokiri emerald',
    'goron ruby',
    'zora sapphire',
    'forest medalion',
    'fire medalion',
    'water medalion',
    'shadow medalion',
    'spirit medalion',
    'light medalion',
);

export default dungeonRewards;
