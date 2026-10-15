/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) { // Time: O(n), Space: O(n)
    const pre = new Array(nums.length + 1).fill(1);
    const post = new Array(nums.length + 1).fill(1);

    let currP = 1;

    for (let i = 0; i < nums.length; i++) {
        currP *= nums[i];
        pre[i + 1] = currP;
    }

    currP = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        currP *= nums[i];
        post[i] = currP;
    }

    const res = [];

    for (let i = 0; i < nums.length; i++) {
        const prod = pre[i] * post[i + 1];
        res.push(prod);
    }

    return res;
};