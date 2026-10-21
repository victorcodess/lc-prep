/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) { // Time: O(nlog(n)), Space: O(1)
    nums = nums.map((x) => x * x).sort((a, b) => a - b);

    const mid = Math.floor(nums.length / 2) - 1;

    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i <= mid) left += nums[i];
        if (i > mid) right += nums[i];
    }

    return right - left;
};