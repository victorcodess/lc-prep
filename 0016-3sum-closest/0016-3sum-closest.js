/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const seen = new Set();
    nums.sort((a, b) => a - b);
    let res = null;
    let closest = Infinity;
    

    // -4,-1,1,2 -> -3
    // -4 -1

    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];

        const need = target - num1;
        

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const diff = Math.abs(sum - target);

            if (diff < closest) {
                res = sum;
                closest = diff;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return res;


};