/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target, i = 0, memo = new Map()) { // Time: O(n * t + K), Space: O(n * t + K)
//     if (target === 0) return [[]];
//     if (i >= candidates.length || target < 0) return [];

//     const key = `${i},${target}`;
//     if (memo.has(key)) return memo.get(key);

//     let sums = [];

//     for (let j = i; j < candidates.length; j++) {
//         const diff = target - candidates[j];
//         const currSum = combinationSum(candidates, diff, j, memo);

//         for (let sum of currSum) {
//             sums.push([candidates[j], ...sum]);
//         }
//     }
    
//     memo.set(key, sums);
//     return sums;
// };

var combinationSum = function(candidates, target) { // Time: O(n * t + K), Space: O(t + K)
    const result = [];
    const sum = [];

    function dfs(i, targ) {
        if (targ === 0) {
            result.push([...sum]);
        }
        if (i >= candidates.length || targ < 0) return;

        for (let j = i; j < candidates.length; j++) {
            const diff = targ - candidates[j];
            sum.push(candidates[j]);
            console.log(i, diff, sum)
            dfs(j, diff);
            sum.pop();
        }
        
        return;
    }
    

    dfs(0, target);


    return result;
};