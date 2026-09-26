/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { // Time: O(log(n)), Space: O(1)
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else if (nums[mid] < nums[r]) {
            r = mid;
        } 
    }

    function findT(l, r) {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] > target) {
                r = mid - 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    const first = findT(0, l - 1);
    const second = findT(l, nums.length - 1);

    if (first === -1) {
        return second;
    } else {
        return first;
    }
};