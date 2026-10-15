/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) { // Time: O(v + e), Space: (v)
    const graph = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (let [a, b] of prerequisites) {
        graph[b].push(a);
    }

    const res = [];
    const visiting = new Map();

    let cycle = false;

    function dfs(node) {
        if (visiting.has(node)) return visiting.get(node);
        visiting.set(node, true);

        for (let next of graph[node]) {
            if (dfs(next)) return true;
        }

        res.push(node);

        visiting.set(node, false);
        return false;
    }

    for (let node in graph) {
        if (dfs(Number(node))) {
            cycle = true;
        }
    }

    return cycle || res.length !== numCourses ? [] : res.reverse();
};