/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
// var minOperations = function(nums, x) { // Time: O(d * n^2), Space: O(d * n^2)
//     const memo = new Map();

//     function dfs(x, l, r) {
//         if (x === 0) return 0;
//         if (x < 0) return Infinity;
//         if (l > r) return Infinity;

//         const key = x + "," + l + "," + r;
//         if (memo.has(key)) return memo.get(key);

//         const left = 1 + dfs(x - nums[l], l + 1, r);
//         const right = 1 + dfs(x - nums[r], l, r - 1);

//         const res = Math.min(left, right);

//         memo.set(key, res);
//         return res;
//     }
    
//     const ans = dfs(x, 0, nums.length - 1);
//     return ans === Infinity ? -1 : ans;
// };
var minOperations = function(nums, x) { // Time: O(n), Space: O(1)
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total - x;
    let maxL = -1;

    if (target < 0) return -1;
    if (target === 0) return nums.length;

    let l = 0;
    let sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum > target) {
            sum -= nums[l];
            l++;
        }

        if (sum === target) {
            maxL = Math.max(maxL, (r - l + 1));
        }
    }

    return maxL === -1 ? -1 : nums.length - maxL;
};