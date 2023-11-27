// @ts-check
'use strict'

import itemTypes from '../data/itemTypes.js';
import Item from './Item.js';

export default class Consumable extends Item {
    /**
     * @param {string} name
     * @param {object} [conditions]
     * @param {number} [quantity]
     */
    constructor(name, conditions, quantity) {
        super(name, itemTypes.CONSUMABLE, conditions);
        this._quantity = quantity ?? 0;
    }

    /**
     * @returns {number}
     */
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
}
