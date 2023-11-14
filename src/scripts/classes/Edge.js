export default class Edge {
    /**
     * @param {string} from
     * @param {string} to
     * @param {object} [condition]
     * @param {string[]} [condition.is] - current age
     * @param {string[]} [condition.at] - current location
     * @param {string[]} [condition.has] - items in inventory
     */
    constructor(from, to, condition) {
        this.from = from;
        this.to = to;
        this.condition = condition;
    }
}
