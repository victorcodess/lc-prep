/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid, r = 0, c = 0, memo = new Map()) { // Time: O(m * n), Space: O(m * n)
    if (0 > r || r >= obstacleGrid.length || 0 > c || c >= obstacleGrid[0].length) return 0;
    if (obstacleGrid[r][c] === 1) return 0;
    if (r === obstacleGrid.length - 1 && c === obstacleGrid[0].length - 1) return 1;

    const key = r + "," + c; 
    if (memo.has(key)) return memo.get(key);

    const deltas = [
        [1, 0],
        [0, 1]
    ];

    let paths = 0;

    for (let [dr, dc] of deltas) {
       paths += uniquePathsWithObstacles(obstacleGrid, r + dr, c + dc, memo);
    }

    memo.set(key, paths);
    return paths;
};
