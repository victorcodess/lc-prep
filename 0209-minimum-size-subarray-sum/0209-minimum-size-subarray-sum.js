/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) { // Time: O(n), Space: O(1)
    let e = 0;
    let sum = 0;
    let minL = Infinity;

    for (let s = 0; s < nums.length; s++) {
        sum += nums[s];

        while (sum >= target) {
            const len = s - e + 1;
            minL = Math.min(minL, len);

            sum -= nums[e];
            e++;
        }
    }


    return minL === Infinity ? 0 : minL;
};