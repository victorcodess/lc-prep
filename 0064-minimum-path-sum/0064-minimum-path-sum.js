/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, r = 0, c = 0, memo = new Map()) {
  if (r === grid.length || c === grid[0].length) return Infinity;
  
  const pos = r + "," + c;
  if (memo.has(pos)) return memo.get(pos);
  
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  let downSum = minPathSum(grid, r + 1, c, memo);
  let rightSum = minPathSum(grid, r, c + 1, memo);
  memo.set(pos, grid[r][c] + Math.min(downSum, rightSum));

  return memo.get(pos);
};