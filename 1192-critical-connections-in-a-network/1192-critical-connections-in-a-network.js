/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) { // Time: O(n + m), Space: O()
    const graph = new Array(n).fill(null).map(() => []);

    for (let [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const disc = new Array(n).fill(-1);
    const low = new Array(n).fill(-1);
    let time = 0;
    let result = [];

    function dfs(node, parent) {
        disc[node] = low[node] = time++;

        for (let next of graph[node]) {
            if (next === parent) continue;

            if (disc[next] === -1) {
                dfs(next, node);

                low[node] = Math.min(low[node], low[next]);

                if (low[next] > disc[node]) {
                    result.push([node, next]);
                }

            } else {
                low[node] = Math.min(low[node], disc[next])
            }
        }
    }

    dfs(0, -1);

    return result;
};