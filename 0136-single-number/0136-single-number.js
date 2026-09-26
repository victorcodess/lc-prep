/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // Time: O(n), Space: O(1)
    let res = 0;

    for (let num of nums) {
        res ^= num;
    }

    return res;
};