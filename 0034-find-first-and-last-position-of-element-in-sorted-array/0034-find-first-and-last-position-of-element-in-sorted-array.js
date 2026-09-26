/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) { // Time: O(log(n)), Space: O(1)
    let i = 0;
    let j = nums.length - 1;

    function find(i, j, dir) {
        let d = -1;

        while (i <= j) {
            const mid = Math.floor((i + j) / 2);

            if (nums[mid] < target) {
                i = mid + 1;
            } else if (nums[mid] > target) {
                j = mid - 1;
            } else {
                d = mid;

                if (dir === 1) {
                    i = mid + 1;
                } else {
                    j = mid - 1;
                }
            }
        }

        return d;
    }

    let l = find(i, j, -1);
    let r = find(0, nums.length - 1, 1);

    return [l, r];
};