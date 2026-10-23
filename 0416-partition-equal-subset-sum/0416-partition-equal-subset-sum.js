/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) { // Time: O(n * S), Space: O(n * S)
    if (nums.length < 2) return false;

    const totalSum = nums.reduce((a, b) => a + b, 0);

    if (totalSum % 2 !== 0) return false;

    const half = totalSum / 2;

    const memo = Array.from({ length: nums.length + 1 }, () => Array(half + 1).fill(null));

    function dfs(i, target) {
        if (i >= nums.length) return false;
        if (target < 0) return false;
        if (target === 0) return true;

        if (memo[i][target] !== null) return memo[i][target];

        const take = dfs(i + 1, target - nums[i]);
        const skip = dfs(i + 1, target);

        const res = take || skip;

        memo[i][target] = res;
        return res;
    }

    return dfs(0, half);
};