/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) { // Time: O(n), Space: O(n)
    const N = grid.length;
    const M = grid[0].length;
    const q = [];
    let head = 0;
    let good = 0;

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (grid[r][c] === 2) {
                q.push([r, c, 0]);
            }
            if (grid[r][c] === 1) {
                good++;
            }
        }
    }

    let minT = 0;
    const visited = new Set();

    while (head < q.length) {
        const [r, c, time] = q[head++];

        minT = Math.max(minT, time);

        const deltas = [
            [0, 1], 
            [0, -1], 
            [1, 0], 
            [-1, 0], 
        ]

        for (let [dr, dc] of deltas) {
            const nr = r + dr;
            const nc = c + dc;
            const key = nr + "," + nc;

            if ((nr >= 0 && nr < N && nc >= 0 && nc < M) && grid[nr][nc] === 1 && !visited.has(key))  {
                visited.add(key);
                q.push([nr, nc, time + 1]);
            }
        }
    }
    
    return visited.size === good ? minT : -1;
};