/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) { // Time: O(n * n), Space: O(n)
    const res = new Array(nums.length).fill(null);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
        }

        if (res[i] === null) {
            for (let j = 0; j < i; j++) {
                if (nums[j] > nums[i]) {
                    res[i] = nums[j];
                    break;
                }
            }
        }

        if (res[i] === null) res[i] = -1;
    }

    return res;
};