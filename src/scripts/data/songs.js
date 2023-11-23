// @ts-check
'use strict'

import createEnum from "../classes/createEnum.js";

/**
 * @name songs
 * @property {string} ZELDA_LULLABY
 * @property {string} EPONA_SONG
 * @property {string} SARIA_SONG
 * @property {string} SUN_SONG
 * @property {string} SONG_OF_TIME
 * @property {string} SONG_OF_STORMS
 * @property {string} MINUET_OF_FOREST
 * @property {string} BOLERO_OF_FIRE
 * @property {string} SERENADE_OF_WATER
 * @property {string} NOCTURNE_OF_SHADOW
 * @property {string} REQUIEM_OF_SPIRIT
 * @property {string} PRELUDE_OF_LIGHT
 */
const songs = createEnum(
    'zelda lullaby',
    'epona song',
    'saria song',
    'sun song',
    'song of time',
    'song of storms',
    'minuet of forest',
    'bolero of fire',
    'serenade of water',
    'nocturne of shadow',
    'requiem of spirit',
    'prelude of light',
);

export default songs;
