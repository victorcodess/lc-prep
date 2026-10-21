/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) { // Time: O((n * n) * log(n)), Space: O(n * n)
    const n = grid.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    const q = [];
    let head = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                q.push([r, c]);
            }
        }
    }

    const deltas = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]

    while (head < q.length) {
        const [r, c] = q[head++];

        for (let [dr, dc] of deltas) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }

    const visited = new Set();
    const maxHeap = new MaxPriorityQueue((pos) => pos[0]);
    maxHeap.enqueue([dist[0][0], 0, 0]);

    while (!maxHeap.isEmpty()) {
        const [safety, r, c] = maxHeap.dequeue();

        if (r === n - 1 && c === n - 1) return safety;

        for (let [dr, dc] of deltas) {
            const nr = r + dr;
            const nc = c + dc;
            const key = nr + "," + nc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited.has(key)) {
                visited.add(key);
                const nextSafety = Math.min(safety, dist[nr][nc]);
                maxHeap.enqueue([nextSafety, nr, nc]);
            }
        }
    }

    return -1;
};