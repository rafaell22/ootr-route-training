// @ts-check
'use strict'

export default class Check {
    /**
     * @param {string} name
     * @param {object} conditions
     */
    constructor(name, conditions) {
        this.name = name;
        this.conditions = conditions;
    }
};
