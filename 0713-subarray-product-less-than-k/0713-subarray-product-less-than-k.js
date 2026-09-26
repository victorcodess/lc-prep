/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) { // Time: O(n), Space: O(1)
    if (k <= 1) return 0;

    let count = 0;
    let currP = 1;

    let i = 0;
    let j = 0;

    while (j < nums.length) {
        currP *= nums[j];

        while (currP >= k) {
            currP /= nums[i];
            i++;
        }

        count += (j - i + 1);
        j++;

    }

    return count;
};