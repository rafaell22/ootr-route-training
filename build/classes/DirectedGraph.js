export default class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
    }

    printGraph() {
        for(const vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(' ')}`);
        }
    }

    #isCyclicUtil(vertex, visited, recStack) {
        if(recStack[vertex]) {
            return true;
        }

        if(visited[vertex]) {
            return false;
        }

        visited[vertex] = true;

        recStack[vertex] = true;
        let children = this.adjacencyList[vertex];

        for(const child of children) {
            if(this.#isCyclicUtil(child, visited, recStack)) {
                return true;
            }
        }

        recStack[vertex] = false;
        return false;
    }

    isCyclic() {
        const visited = {};
        const recStack = {};

        for(const vertex in this.adjacencyList) {
            visited[vertex] = false;
            recStack[vertex] = false;
        }

        for(const vertex in this.adjacencyList) {
            if(this.#isCyclicUtil(vertex, visited, recStack)) {
                return true;
            }
        }

        return false;
    }
}
