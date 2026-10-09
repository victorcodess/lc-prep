/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) { // Time: O(log(n)), Space: O(1)
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return nums[l];
};