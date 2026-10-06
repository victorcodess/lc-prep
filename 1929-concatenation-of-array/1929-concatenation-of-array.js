/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) { // Time: O(n), Space: O(n)
    const res = nums.slice();
    res.push(...nums);

    return res;
};