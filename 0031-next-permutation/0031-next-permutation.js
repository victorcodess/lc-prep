/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) { // Time: O(n), Space: O(1)
    // find pivot
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // find smallest num greater than pivot
    let j = nums.length - 1;

    if (i >= 0) {
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // reverse nums after pivot
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};