// @ts-check
'use script'

import itemTypes from "../data/itemTypes.js";

export default class Item {
    /**
     * @param {string} name
     * @param {itemTypes} type
     * @param {object} [conditions]
     */
    constructor(name, type, conditions) {
        this.name = name;
        this.type = type;
        this.conditions = conditions;
    }
}
