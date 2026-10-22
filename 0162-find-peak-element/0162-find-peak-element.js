/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) { // Time: O(n), Space: O(1)
    for (let i = 0; i < nums.length; i++) {
        if ((i === 0 || nums[i] > nums[i - 1]) && (i === nums.length - 1 || nums[i] > nums[i + 1])) return i;
    }

    return 0;
};