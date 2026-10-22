/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) { // Time: O(n), Space: O(n)
    const prefix = new Map();
    prefix.set(0, -1);

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        const remainder = k === 0 ? sum : sum % k;

        if (prefix.has(remainder)) {
            if (i - prefix.get(remainder) >= 2) return true;
        } else {
            prefix.set(remainder, i);
        }
    }

    return false;
};