class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // for undirected graph
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList.set(
            vertex1,
            this.adjacencyList.get(vertex1).filter(v => v !== vertex2)
        );
        this.adjacencyList.set(
            vertex2,
            this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
        );
    }

    removeVertex(vertex) {
        this.adjacencyList.get(vertex).forEach(neighbor => {
            this.removeEdge(vertex, neighbor);
        });
        this.adjacencyList.delete(vertex);
    }
}