/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums, m = 2) { // Time: O(n), Space: O(1)
    if (nums.length <= m) return nums.length;

    let k = m;
    
    for (let i = m; i < nums.length; i++) {
        if (nums[i] !== nums[k - m]) {
            nums[k] = nums[i];
            k++;
        }      
    }

    return k;
};