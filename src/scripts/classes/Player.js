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
     * @param {locations} options.isAt
     * @param {ages} options.isAge
     * @param {object[]} [options.hasItem]
     * @param {items} [options.hasItem[].name]
     * @param {number} [options.hasItem[].quantity]
     *
     * @throws
     */
    constructor(options) {
        if(!options.isAt) {
            throw new Error('Missing player\'s location!');
        }

        if(!options.isAge) {
            throw new Error('Missing player\'s age!');
        }

        this.location = options.isAt;
        this.age = options.isAge;
        this.inventory = new Inventory();
        if(options.hasItem) {
            for(const item of options.hasItem) {
                this.inventory.add(item.name, item.quantity, 'items');
            }
        }
    }

    /**
     * @param {locations} location
     *
     * @throws
     */
    isAt(location) {
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
    isAge(age) {
        if(!age) {
            throw new Error('Missing age to compare!');
        }

        return this.age === age;
    }

    /**
     * @param {items|dungeonRewards} item
     * @param {number} [quantity]
     */
    hasItem(item, quantity) {
        return this.inventory.has(item, quantity ?? 1, 'items');
    }
};
