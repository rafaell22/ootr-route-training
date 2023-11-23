// @ts-check
'use script'

import itemTypes from "../data/itemTypes.js";
import ages from "../data/ages.js";

export default class Item {
    /**
     * @param {string} name
     * @param {itemTypes} type
     * @param {ages} [age]
     */
    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }

    /**
     * @param {ages} age
     */
    canUse(age) {
        return this.age ? this.age === age : true;
    }
}
