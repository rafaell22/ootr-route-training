// @ts-check
'use strict'

export default class Check {
    /**
     * @param {string} name
     * @param {object} reward
     * @param {object} [conditions]
     *
     * @throws
     */
    constructor(name, reward, conditions) {
        if(!name) {
            throw new Error('Missing check\'s name');
        }

        if(!reward) {
            throw new Error('Missing check\'s reward');
        }

        if(typeof name !== 'string') {
            throw new Error('Check\'s name must be a string');
        }

        this.name = name;
        this.reward = reward;
        this.conditions = conditions;
        this.done = false;
    }

    /**
     * @returns {object}
     */
    do() {
        this.done = true;
        return this.reward;
    }

    undo() {
        this.done = false;
    }
};
