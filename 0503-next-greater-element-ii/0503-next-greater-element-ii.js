/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) { // Time: O(n * n), Space: O(n)
    const N = nums.length;  
    const res = new Array(N).fill(null);

    for (let i = 0; i < N; i++) {
        for (let j = (i + 1) % N; j !== i; j = (j + 1) % N) {
            if (nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
        }

        if (res[i] === null) res[i] = -1;
    }

    return res;
};