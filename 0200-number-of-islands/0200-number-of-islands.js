/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) { // Time: O(n * m), Space: O(n * m)
    const N = grid.length;
    const M = grid[0].length;
    const visited = new Set();
    let count = 0;

    function explore(r, c) {
        const pos = r + "," + c;
        visited.add(pos);

        const deltas = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
        ];

        for (let [dr, dc] of deltas) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

            const npos = nr + "," + nc;
            if (visited.has(npos)) continue;

            if (grid[nr][nc] === "0") continue;
            
            explore(nr, nc);
        }
    }

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            const pos = r + "," + c;
            if (grid[r][c] === "1" && !visited.has(pos)) {
                explore(r, c);
                count++;
            }
        }
    }

    return count;
};