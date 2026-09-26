/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) { // Time: O(log(n)), Space: O(1)
    let i = 0;
    let j = nums.length - 1;

    let l = -1;
    let r = -1;

    while (i <= j) {
        const mid = Math.floor((i + j) / 2);

        if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            r = mid;
            i = mid + 1;
        }
    }

    i = 0;
    j = nums.length - 1;

    while (i <= j) {
        const mid = Math.floor((i + j) / 2);

        if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            l = mid;
            j = mid - 1;
        }
    }

    return [l, r];
    
};