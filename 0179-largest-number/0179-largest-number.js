/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) { // Time: O(nlog(n * k)), Space: O(n)
    nums = nums.map(String).sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`));
    const result = nums.join("");

    if (result[0] === "0") return "0";

    return result;
};
