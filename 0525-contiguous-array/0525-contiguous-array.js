/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) { // Time: O(n), Space: O(n)
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    let maxL = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if (map.has(sum)) {
            maxL = Math.max(maxL, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxL;
};