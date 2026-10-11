/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, i = 0, memo = new Map()) { // Time: O(n), Space: O(n)
    if (i >= nums.length) return false;
    if (i === nums.length - 1) return true;
    if (memo.has(i)) return memo.get(i);

    const len = nums[i];

    for (let j = 1; j <= len; j++) {
        if (canJump(nums, i + j, memo)) {
            memo.set(i, true);
            return true;
        }
    }

    memo.set(i, false);
    return false;
};