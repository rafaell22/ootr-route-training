// @ts-check
'use strict'

import itemTypes from '../data/itemTypes.js';
import ages from '../data/ages.js';
import Item from './Item.js';

export default class Consumable extends Item {
    /**
     * @param {string} name
     * @param {ages} [age]
     */
    constructor(name, age) {
        super(name, itemTypes.CONSUMABLE, age);
        this._quantity = 0;
    }

    get quantity() {
        return this._quantity;
    }

    /**
     * @param {number} quantity
     */
    add(quantity) {
        this._quantity += quantity;
    }

    /**
     * @param {number} quantity
     */
    use(quantity) {
        this._quantity -= quantity;
    }

    /**
     * @param {ages} age
     */
    canUse(age) {
        return this.age && this.age === age;
    }
}
