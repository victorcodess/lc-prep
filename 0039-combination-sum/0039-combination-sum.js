/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, i = 0, memo = new Map()) { // Time: O(n * t), Space: O(n * t)
    if (target === 0) return [[]];
    if (i >= candidates.length || target < 0) return [];

    const key = `${i}, ${target}`;
    if (memo.has(key)) return memo.get(key);

    let sums = [];

    for (let j = i; j < candidates.length; j++) {
        const diff = target - candidates[j];
        const currSum = combinationSum(candidates, diff, j, memo);

        for (let sum of currSum) {
            sums.push([candidates[j], ...sum]);
        }
    }
    
    memo.set(key, sums);
    return sums;
};