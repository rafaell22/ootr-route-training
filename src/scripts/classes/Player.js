// @ts-check
'use strict'

import locations from '#data/locations.js';
import ages from '#data/ages.js';
import items from '#data/items.js';
import dungeonRewards from '#data/dungeonRewards.js';
import Inventory from './Inventory.js';

export default class Player {
    /**
     * @param {object} options
     * @param {locations} options.at
     * @param {ages} options.is
     * @param {items[]} [options.has]
     *
     * @throws
     */
    constructor(options) {
        if(!options.at) {
            throw new Error('Missing player\'s location!');
        }

        if(!options.is) {
            throw new Error('Missing player\'s age!');
        }

        this.location = options.at;
        this.age = options.is;
        this.inventory = new Inventory(options.has ?? []);
    }

    /**
     * @param {locations} location
     *
     * @throws
     */
    at(location) {
        if(!location) {
            throw new Error('Missing location to compare!');
        }

        return this.location === location;
    }

    /**
     * @param {ages} age
     *
     * @throws
     */
    is(age) {
        if(!age) {
            throw new Error('Missing age to compare!');
        }

        return this.age === age;
    }

    /**
     * @param {items|dungeonRewards} item
     */
    has(item) {
        return this.inventory.has(item);
    }
};
