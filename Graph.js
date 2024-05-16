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

    depthFirstSearch(start) {
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            if (!vertex) return null;
            visited.add(vertex);
            result.push(vertex);

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    return dfs(neighbor);
                }
            });
        };

        dfs(start);
        return result;
    }

    breadthFirstSearch(start) {
        const result = [];
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    hasCycle() {
        const visited = new Set();
        const parent = new Map();

        const dfs = (vertex, parentVertex) => {
            visited.add(vertex);
            for (let neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    parent.set(neighbor, vertex);
                    if (dfs(neighbor, vertex)) return true;
                } else if (neighbor !== parentVertex) {
                    return true;
                }
            }
            return false;
        };

        for (let vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) return true;
            }
        }

        return false;
    }

    shortestPathBFS(start, end) {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start);

        while (queue.length) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === end) {
                return path;
            }

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            });
        }

        return null;
    }
}

// Example usage
const graph = new Graph();