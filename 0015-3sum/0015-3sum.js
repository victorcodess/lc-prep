/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function(nums) { // Time: O(n * n), Space: O(n)
//     nums.sort((a, b) => a - b);

//     const seen = new Set();
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) break;

//         if (nums[i] === nums[i - 1]) continue;


//         const target = -1 * nums[i];

//         for (let j = i + 1; j < nums.length; j++) {

//             const complement = target - nums[j];

//             if (seen.has(complement)) result.push([(-1 * target), complement, nums[j]]);

//             seen.add(nums[j]);
//         }

//         seen.clear();
//     }

//     return result;
// };


var threeSum = function(nums) { // Time: O(n * n), Space: O(r)
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;

        if (nums[i] === nums[i - 1]) continue;

        const target = -1 * nums[i];

        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[start] + nums[end];

            if (sum < target) {
                start++;
            } else if (sum > target) {
                end--;
            } else {
                result.push([nums[i], nums[start], nums[end]]);

                start++;
                end--;

                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }

                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            }
        }
    }

    return result;
};