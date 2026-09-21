/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, i = 0) { // Time: O(c^n), Space: O(c^n)
    if (i >= nums.length) return [[]];

    const first = nums[i];

    const withoutFirst = subsets(nums, i + 1);

    const withFirst = [];

    for (let sub of withoutFirst) {
        withFirst.push([first, ...sub]);
    }

    return [...withFirst, ...withoutFirst];
};