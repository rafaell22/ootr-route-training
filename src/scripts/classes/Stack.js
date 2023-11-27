export default class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * @param {any} element
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * @returns {any}
     */
    pop() {
        return this.items.pop();
    }

    /**
     * @returns {any}
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * @returns {number}
     */
    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items.join('<'));
    }

    /**
     * @returns {any[]}
     */
    toArray() {
        return this.items;
    }

    /**
     * @returns {any[]}
     */
    reverse() {
        return this.items.reverse();
    }
}
