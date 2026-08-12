/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n, memo = new Map()) {
    if (n === 0) return 0;
    if (memo.has(n)) return memo.get(n);

    let minSum = Infinity;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        const squaredNum = i * i;
        const currSum = 1 + numSquares(n - squaredNum, memo);
        minSum = Math.min(minSum, currSum);
    }
    
    memo.set(n, minSum);
    return minSum;
};