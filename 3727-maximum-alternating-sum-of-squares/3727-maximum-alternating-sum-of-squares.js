/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    // -1,1,-2,2,-3,3
    // -3,-1,3,1,2,2 
    nums = nums.map((x) => x * x).sort((a, b) => a - b);
    console.log(nums)

    const mid = Math.floor(nums.length / 2) - 1;

        let left = 0;
        let right = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i <= mid) left += nums[i];
            if (i > mid) right += nums[i];
        }

        return right - left;


};