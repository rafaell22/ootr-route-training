// @ts-check
'use strict'

export default class Inventory {
    constructor() {
        this.items = new Map();
    }

    /**
     * @param {string} item
     * @param {string} [pocket]
     * @returns {boolean}
     */
    has(item, pocket) {
        if(!item) {
            throw new Error('Can\'t check if inventory has undefined item');
        }

        if(pocket) {
            const pocketItems = this.items.get(pocket);
            if(!pocketItems) {
                return false;
            }

            return this.items.get(pocket).get(item) ?? false;
        }

        return this.items.get(item) ?? false;
    }

    /**
     * @param {string} item
     * @param {string} [pocket]
     * @returns {Inventory}
     */
    add(item, pocket) {
        if(pocket) {
            if(!this.items.has(pocket)) {
                this.items.set(pocket, new Map());
            }
            this.items.get(pocket).set(item, true);
            return this;
        }

        this.items.set(item, true);

        return this;
    }

    /**
     * @param {string} item
     * @param {string} [pocket]
     * @returns {Inventory}
     */
    remove(item, pocket) {
        if(pocket) {
            this.items.get(pocket)?.delete(item);
        }

        this.items.delete(item);
        return this;
    }
}
