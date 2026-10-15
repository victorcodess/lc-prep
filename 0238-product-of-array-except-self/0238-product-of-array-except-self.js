// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) { // Time: O(n), Space: O(n)
//     const pre = new Array(nums.length + 1).fill(1);
//     const post = new Array(nums.length + 1).fill(1);

//     let currP = 1;

//     for (let i = 0; i < nums.length; i++) {
//         currP *= nums[i];
//         pre[i + 1] = currP;
//     }

//     currP = 1;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         currP *= nums[i];
//         post[i] = currP;
//     }

//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         const prod = pre[i] * post[i + 1];
//         res.push(prod);
//     }

//     return res;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) { // Time: O(n), Space: O(1)
    const res = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] *= prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = res.length - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
};