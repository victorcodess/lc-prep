/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) { // Time: (v + e), Space: O(v + e)
    const graph = {};
    const pereq = prerequisites;

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (let [a, b] of pereq) {
        graph[b].push(a);
    }

    const visiting = new Map();

    function findCycle(node) {
        if (visiting.has(node)) return visiting.get(node);
        visiting.set(node, true);

        for (let next of graph[node]) {
            if (findCycle(next)) {
                return true;
            }
        }

        visiting.set(node, false);
        return false;
    }

    for (let course in graph) {
        if (findCycle(course)) return false;
    }

    return true;
    
};