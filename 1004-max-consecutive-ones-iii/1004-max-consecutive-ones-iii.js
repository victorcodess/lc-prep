/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) { // Time: O(n), Space: O(1)
    let i = 0;
    let j = 0;

    let maxO = 0;
    let zs = 0;

    while (i < nums.length) {
        if (nums[i] === 0) {
            zs++;

            while (zs > k) {
                if (nums[j] === 0) zs--;
                j++;
            }
        } 

        const len = i - j + 1;
        if (len > maxO) maxO = len;

        i++;
    }


    return maxO;
};