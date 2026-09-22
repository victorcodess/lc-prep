/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // Time: O(n), Space: O(n)
    let currSum = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], nums[i] + currSum);

        result = Math.max(currSum, result);
    }
    
    return result;
};

// var maxSubArray = function(nums) { // Time: O(n), Space: O(n)
//     const memo = new Map();

//     function dfs(i) {
//         if (i >= nums.length) return 0;
//         if (memo.has(i)) return memo.get(i);

//         const take = nums[i] + dfs(i + 1);
//         const stop = nums[i];

//         const result = Math.max(take, stop);

//         memo.set(i, result);
//         return result;
//     }

//     let maxSub = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         maxSub = Math.max(maxSub, dfs(i));
//     }

//     return maxSub;
// };



// DOESN'T WORK

// var maxSubArray = function(nums, i = 0, taken = false, memo = new Map()) { // Time: O(n), Space: O(n)
//     if (i >= nums.length) return taken ? -Infinity : 0;

//     const key = i + "," + taken;
//     if (memo.has(key)) return memo.get(key);

//     if (taken === true) {
//         const take = nums[i] + maxSubArray(nums, i + 1, true, memo);
//         const stop = nums[i];
//         const result = Math.max(take, stop);

//         memo.set(key, result);
//         return result;
//     } else {
//         const take = nums[i] + maxSubArray(nums, i + 1, true, memo);
//         const skip = maxSubArray(nums, i + 1, false, memo);
//         const result = Math.max(take, skip);

//         memo.set(key, result);
//         return result;
//     }
// };