/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) { // Time: O(n), Space: O(n)
    let n = 1;
    const numSet = new Set(nums);

    while (numSet.has(n * k)) {
        n++;
    }

    return n * k;
};