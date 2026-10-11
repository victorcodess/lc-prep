/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) { // Time: O(n^2), Space: O(1)
    nums.sort((a, b) => a - b);
    let res = null;
    let closest = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const diff = Math.abs(sum - target);

            if (diff < closest) {
                res = sum;
                closest = diff;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return res;
};