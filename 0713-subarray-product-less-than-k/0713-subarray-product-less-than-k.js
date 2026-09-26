/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) { // Time: O(n), Space: O(1)
    let count = 0;
    let currP = 1;

    let i = 0;
    let j = 0;

    while (i < nums.length && j < nums.length) {
        const num = nums[j];
        currP *= num;

        while (currP >= k) {
            const prev = nums[i];
            currP /= prev;
            i++;
        }

        if (currP < k) {
            count += Math.max(0, (j - i + 1));
            j++;
        }
    }

    return count;
};