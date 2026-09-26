/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { // Time: O(n), Space: O(n)
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};