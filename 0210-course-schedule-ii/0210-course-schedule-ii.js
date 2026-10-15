/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// var findOrder = function(numCourses, prerequisites) { // Time: O(v + e), Space: (v)
//     const graph = {};

//     for (let i = 0; i < numCourses; i++) {
//         graph[i] = [];
//     }

//     for (let [a, b] of prerequisites) {
//         graph[b].push(a);
//     }

//     const res = [];
//     const visiting = new Map();

//     let cycle = false;

//     function dfs(node) {
//         if (visiting.has(node)) return visiting.get(node);
//         visiting.set(node, true);

//         for (let next of graph[node]) {
//             if (dfs(next)) return true;
//         }

//         res.push(node);

//         visiting.set(node, false);
//         return false;
//     }

//     for (let node in graph) {
//         if (dfs(Number(node))) {
//             cycle = true;
//         }
//     }

//     return cycle || res.length !== numCourses ? [] : res.reverse();
// };

var findOrder = function(numCourses, prerequisites) { // Time: O(v + e), Space: (v + e)
    const indegrees = new Array(numCourses).fill(0);
    const graph = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (let [a, b] of prerequisites) {
        graph[b].push(a);
        indegrees[a]++;
    }

    const q = [];
    let head = 0;
    const res = [];

    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) q.push(i);
    }

    while (head < q.length) {
        const curr = q[head++];

        res.push(curr);

        for (let next of graph[curr]) {
            indegrees[next]--;

            if (indegrees[next] === 0) q.push(next);
        }
    }

    return res.length === numCourses ? res : [];
};