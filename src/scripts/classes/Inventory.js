// @ts-check
'use strict'

import items from '#data/items.js';

export default class Inventory {
    /**
     * @param {object[]} [initialItems]
     * @param {items} [initialItems[].name]
     * @param {number} [initialItems[].quantity]
     * @param {string} [initialItems[].pocket]
     */
    constructor(initialItems = []) {
        this.items = new Map();
        for(const item of initialItems) {
            this.add(item.name, item.quantity, item.pocket);
        }
    }

    /**
     * Checks if inventory has item quantity equal to quantity
     * @param {string} item
     * @param {number|string} [quantity]
     * @param {string} [pocket]
     * @returns {boolean}
     * @throws
     */
    has(item, quantity, pocket) {
        if(!item || typeof item === 'number') {
            throw new Error('Can\'t check if inventory has undefined item');
        }

        let needToCheckQuantity = false;
        if(typeof quantity === 'number') {
            needToCheckQuantity = true;
        } else {
            pocket = quantity;
        }

        let itemsInInventory = this.items.get(item);
        if(pocket) {
            const pocketItems = this.items.get(pocket);
            if(!pocketItems) {
                return false;
            }

            itemsInInventory = pocketItems.get(item);
        }

        if(needToCheckQuantity) {
            return itemsInInventory === quantity;
        }

        return !!itemsInInventory;
    }

    /**
     * @param {string} item
     * @param {number|string} [quantity]
     * @param {string} [pocket]
     * @returns {Inventory}
     */
    add(item, quantity, pocket) {
        if(!item || typeof item === 'number') {
            throw new Error('Can\'t add undefined item');
        }

        let specifiedQuantity = false;
        if(typeof quantity === 'number') {
            specifiedQuantity = true;
        } else {
            pocket = quantity;
        }

        let itemsInInventory = this.items;
        let currentQuantity = itemsInInventory.get(item);
        if(pocket) {
            if(!this.items.has(pocket)) {
                this.items.set(pocket, new Map());
            }
            itemsInInventory = this.items.get(pocket);
            currentQuantity = itemsInInventory?.get(item);
        }

        let quantityToAdd = 1;
        if(specifiedQuantity) {
            quantityToAdd = +quantity;
        }

        itemsInInventory?.set(item, currentQuantity ? currentQuantity + quantityToAdd : quantityToAdd);

        return this;
    }

    /**
     * @param {string} item
     * @param {number|string} [quantity]
     * @param {string} [pocket]
     * @returns {Inventory}
     */
    remove(item, quantity, pocket) {
        if(!item || typeof item === 'number') {
            throw new Error('Can\'t remove undefined item');
        }

        let specifiedQuantity = false;
        if(typeof quantity === 'number') {
            specifiedQuantity = true;
        } else {
            pocket = quantity;
        }

        let itemsInInventory = this.items;
        if(pocket) {
            itemsInInventory = this.items.get(pocket);
        }

        if(specifiedQuantity) {
            itemsInInventory?.set(item, itemsInInventory.get(item) - 1);
            return;
        }

        itemsInInventory?.delete(item);
        return this;
    }
}
