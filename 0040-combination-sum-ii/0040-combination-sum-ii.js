/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) { // Time: O(n * 2^n), Space: O(n)
    candidates.sort((a, b) => a - b);
    const res = [];
    const curr = [];

    function dfs(i, target) {
        if (target === 0) {
            res.push(curr.slice());
            return;
        }

        if (i >= candidates.length || target < 0) return;

        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            if (candidates[j] > target) break;

            const rest = target - candidates[j];
            curr.push(candidates[j]);

            dfs(j + 1, rest);

            curr.pop();
        }

    }

    dfs(0, target);

    return res;
};