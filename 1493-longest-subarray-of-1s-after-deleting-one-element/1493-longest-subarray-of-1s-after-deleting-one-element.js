/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) { // Time: O(n), Space: O(n)
    const compound = [];
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === 0) {
            compound.push(nums[i]);
            i++;
        } else {
            let sum = 0;
            while (nums[i] === 1) {
                sum += nums[i];
                i++;
            }
            compound.push(sum);
        }
    }

    let maxSub = -Infinity;

    for (let i = 0; i < compound.length; i++) {
        if (compound[i] === 0) {
            const left = compound[i - 1] ?? 0;
            const right = compound[i + 1] ?? 0;
            maxSub = Math.max(maxSub, left + right);
        }
    }

    if (maxSub === -Infinity) {
        return compound[0] - 1;
    } else {
        return maxSub;
    }
};