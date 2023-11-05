export default class DirectedGraph {
    #topologicalSorted = null;
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        console.log('Adding vertex ', vertex)
        this.adjacencyList[vertex] = [];
        this.#topologicalSorted = null;
    }

    addEdge(vertex1, vertex2) {
        console.log('Adding edge : ', vertex1, vertex2)
        this.adjacencyList[vertex1].push(vertex2);
        this.#topologicalSorted = null;
    }

    printGraph() {
        for(const vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(' ')}`);
        }
    }

    getVertex(vertex) {
        return this.adjacencyList[vertex];
    }

    has(vertex) {
        return (this.adjacencyList[vertex] ? true : false);
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

    #topologicalSortUtil(vertex, visited, stack) {
        // Mark the current node as visited.
        visited[vertex] = true;

        for(const edge of this.adjacencyList[vertex]) {
            if(!visited[edge]){
                this.#topologicalSortUtil(edge, visited, stack)
            }
        }

        // Push current vertex to stack
        // which stores result
        stack.push(vertex);
    }

    topologicalSort() {
        if(this.#topologicalSorted) {
            return this.#topologicalSorted;
        }
        let stack = [];

        // Mark all the vertices as not visited
        let visited = {};
        for(const vertex in this.adjacencyList) {
            visited[vertex] = false;
        }

        for(const vertex in this.adjacencyList) {
            if (visited[vertex] === false){
                this.#topologicalSortUtil(vertex, visited, stack);
            }
        }
        
        this.#topologicalSorted = stack;
        return stack;
    }
}
