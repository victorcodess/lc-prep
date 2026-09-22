/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) { // Time: O(log(n)), Space: O(1)
    let i = 0; 
    let j = nums.length - 1;

    while (i <= j) {
        const mid = Math.floor((j + i) / 2);

        if (mid + 1 < nums.length && nums[mid + 1] === nums[mid]) {
             if ((j - mid + 1) % 2 === 0) {
                j = mid - 1;
            } else {
                i = mid + 2;
            }
        } else if (mid - 1 >= 0 && nums[mid - 1] === nums[mid]) {
            if ((mid - 1 - i) % 2 === 0) {
                i = mid + 1;
            } else {
                j = mid - 2;
            }
        } else {
            return nums[mid];
        }
    }
};


console.log(0 % 2)