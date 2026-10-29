/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {
//     const memo = new Map();

//     function dfs(i, prev, used) {
//         if (i >= nums.length) return 0;

//         // const key = i + "," + used;
//         // if (memo.has(key)) return memo.get(key);

//         // const skip = dfs(i + 1, prev, used);

//         let take = 0;

//         if (i > 0 && nums[i] < prev) {
//             if (!used) {
//                 take = 1 + dfs(i + 1, prev, true);
//             } else {
//                 take = 0;
//             }
//         } else {
//             take = 1 + dfs(i + 1, nums[i], used);
//         }


//         // const res = Math.max(take, skip);
        
//         return take;
//     }

//     return dfs(0, -Infinity, false);
// };

var longestSubarray = function(nums) { // Time: O(n), Space: O(n)
    const n = nums.length;

    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] <= nums[i]) left[i] = left[i - 1] + 1;
    }

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i + 1] >= nums[i]) right[i] = right[i + 1] + 1;
    }

    let res = Math.max(...left);

    for (let i = 0; i < n; i++) {
        const l = i > 0 ? left[i - 1] : 0;
        const r = i + 1 < n ? right[i + 1] : 0;

        if (i > 0 && i + 1 < n && nums[i - 1] <= nums[i + 1]) {
            res = Math.max(res, l + r + 1);
        } else {
            res = Math.max(res, l + 1, r + 1);
        }
    }

    return res;
};