/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let prevMin = nums[0];
//     let prevMax = nums[0];
//     let result = nums[0];

//     for (let num of nums) {
//         let tempPMin = prevMin;
//         let tempPMax = prevMax;

//         prevMin = Math.min(prevMin, num)
//     }
    
// };

var maxSubArray = function(nums) { // Time: O(n), Space: O(n)
    const memo = new Map();

    function dfs(i) {
        if (i >= nums.length) return 0;
        if (memo.has(i)) return memo.get(i);

        const take = nums[i] + dfs(i + 1);
        const stop = nums[i];

        const result = Math.max(take, stop);

        memo.set(i, result);
        return result;
    }

    let maxSub = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        maxSub = Math.max(maxSub, dfs(i));
    }

    return maxSub;
};

// var maxSubArray = function(nums, i = 0, taken = false, skipped = false, memo = new Map()) { // Time: O(n^3), Space: O(n^3)
//     if (i >= nums.length) return 0;

//     const key = i + "," + taken + "," + skipped;
//     if (memo.has(key)) return memo.get(key);

//     if (taken === true) {
//         if (skipped === true) {
//             const skip = maxSubArray(nums, i + 1, true, true, memo);

//             memo.set(key, skip);
//             return skip;
//         } else {
//             const take = nums[i] + maxSubArray(nums, i + 1, true, false, memo);
//             const skip = maxSubArray(nums, i + 1, true, true, memo);
//             const result = Math.max(take, skip);

//             memo.set(key, result);
//             return result;
//         }
//     } else {
//         const take = nums[i] + maxSubArray(nums, i + 1, true, false, memo);
//         const skip = maxSubArray(nums, i + 1, false, true, memo);
//         const result = Math.max(take, skip);

//         memo.set(key, result);
//         return result;
//     }
// };