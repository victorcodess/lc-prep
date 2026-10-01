/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0, memo = new Map()) { // Time: O(n), Space: O(n)
    if (i >= nums.length) return 0;
    if (memo.has(i)) return memo.get(i);

    const steal = nums[i] + rob(nums, i + 2, memo);
    const skip = rob(nums, i + 1, memo);

    const res = Math.max(skip, steal);

    memo.set(i, res);
    return res;
};