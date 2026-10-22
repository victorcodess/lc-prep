/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) { // Time: O(n), Space: O(1)
//     for (let i = 0; i < nums.length; i++) {
//         if ((i === 0 || nums[i] > nums[i - 1]) && (i === nums.length - 1 || nums[i] > nums[i + 1])) return i;
//     }

//     return 0;
// };

var findPeakElement = function(nums) { // Time: O(log(n)), Space: O(1)
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (mid + 1 < nums.length && nums[mid + 1] > nums[mid]) {
            l = mid + 1;
        } else if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
};