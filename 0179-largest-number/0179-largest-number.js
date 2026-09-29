/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) { // Time: O(nlog(n)), Space: O(n)
    nums = nums.map(String).sort((a, b) => `${b}${a}` - `${a}${b}`);
    const result = nums.join("");

    if (Number(result) === 0) return "0";
    return result;
};
