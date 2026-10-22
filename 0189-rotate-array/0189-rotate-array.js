/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) { // Time: O(n * k), Space: O(n * k)
//     let tmp = nums.slice();
//     const N = nums.length;

//     while (k > 0) {
//         for (let i = 0; i < nums.length; i++) {
//             let nxtIdx = ((i + 1) % N);
//             tmp[nxtIdx] = nums[i]; 
//         }

//         nums = tmp.slice();

//         k--;
//     }

//     console.log(nums, tmp)
// };

// var rotate = function(nums, k) { // Time: O(n * k), Space: O(1)
//     const N = nums.length;

//     while (k > 0) {
//         let tmp = nums[0];

//         for (let i = 1; i < nums.length; i++) {
//             let nxtTmp = nums[i];

//             nums[i] = tmp;

//             tmp = nxtTmp;
//         }

//         nums[0] = tmp;

//         k--;
//     }
// };

var rotate = function(nums, k) { // Time: O(n), Space: O(n)
    const N = nums.length;
    k %= N;
    const cpy = nums.slice();

    for (let i = 0; i < nums.length; i++) {
        let prevIdx = (i - k + N) % N;

        nums[i] = cpy[prevIdx];
    }
};