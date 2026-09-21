/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) { // Time: O(n), Space: O(n)
//     const compound = [];
//     let i = 0;

//     while (i < nums.length) {
//         if (nums[i] === 0) {
//             compound.push(nums[i]);
//             i++;
//         } else {
//             let sum = 0;
//             while (nums[i] === 1) {
//                 sum += nums[i];
//                 i++;
//             }
//             compound.push(sum);
//         }
//     }

//     let maxSub = -Infinity;

//     for (let i = 0; i < compound.length; i++) {
//         if (compound[i] === 0) {
//             const left = compound[i - 1] ?? 0;
//             const right = compound[i + 1] ?? 0;
//             maxSub = Math.max(maxSub, left + right);
//         }
//     }

//     if (maxSub === -Infinity) {
//         return compound[0] - 1;
//     } else {
//         return maxSub;
//     }
// };

// 1,1
// 0,0

var longestSubarray = function(nums) { // Time: O(n), Space: O(1)
    let i = 0;
    let j = 0;

    let windowSum = 0;
    let maxSub = 0;
    let zeros = 0;

    while (j < nums.length) {
        windowSum += nums[j];
        maxSub = Math.max(maxSub, windowSum);

        if (nums[j] === 0) {
            zeros++;
        }

        while (zeros > 1) {
            if (nums[i] === 0) zeros--;
            windowSum -= nums[i];
            i++;
        }

        j++;
    }

    return zeros === 0 ? Math.max(0, maxSub - 1) : maxSub;
};