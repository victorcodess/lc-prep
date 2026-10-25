/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var nextGreaterElements = function(nums) { // Time: O(n * n), Space: O(n)
//     const N = nums.length;  
//     const res = new Array(N).fill(-1);

//     for (let i = 0; i < N; i++) {
//         for (let j = (i + 1) % N; j !== i; j = (j + 1) % N) {
//             if (nums[j] > nums[i]) {
//                 res[i] = nums[j];
//                 break;
//             }
//         }
//     }

//     return res;
// };

var nextGreaterElements = function(nums) { // Time: O(n), Space: O(n)
    const N = nums.length;  
    const res = new Array(N).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * N; i++) {
        let idx = i % N;

        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[idx]) {
            res[stack.pop()] = nums[idx];
        }

        if (i < N) stack.push(i);
    }

    return res;
};