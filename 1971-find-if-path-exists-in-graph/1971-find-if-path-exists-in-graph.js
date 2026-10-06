/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) { // Time: O(v + e), Space: O(v + e)
    const graph = {};

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Set();

    function dfs(source, dest) {
        if (visited.has(source)) return false;
        if (source === dest) return true;

        visited.add(source);

        for (let next of graph[source]) {
            if (dfs(next, dest)) return true;
        }

        return false;
    }

    return dfs(source, destination);
};