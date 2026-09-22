/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, r = 0, c = 0, memo = new Map()) { // Time: O(m * n), Space: O(m + n)
    if (0 > r || r >= m || 0 > c || c >= n) return 0;
    if (r === m - 1 && c === n - 1) return 1;

    const key = r + "," + c;
    if (memo.has(key)) return memo.get(key);

    const deltas = [
        [1, 0],
        [0, 1]
    ];

    let paths = 0;

    for (let [dr, dc] of deltas) {
       paths += uniquePaths(m, n, r + dr, c + dc, memo);
    }

    memo.set(key, paths);
    return paths;
};