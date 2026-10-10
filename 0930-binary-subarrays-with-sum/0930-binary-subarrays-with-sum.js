/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
// var numSubarraysWithSum = function(nums, goal) { // Time: O(n), Space: O(n)
//    const pMap = new Map([[0, 1]]);
//    let pSum = 0;
//    let count = 0;

//    for (let i = 0; i < nums.length; i++) {
//         pSum += nums[i];

//         const need = pSum - goal;

//         if (pMap.has(need)) {
//             count += pMap.get(need);
//         }

//         pMap.set(pSum, (pMap.get(pSum) || 0) + 1);
//    }

//    return count;
// };

var numSubarraysWithSum = function(nums, goal) { // Time: O(n), Space: O(1)
    function atMost(k) {
        if (k < 0) return 0;

        let l = 0;
        let sum = 0;
        let count = 0;

        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];

            while (sum > k) {
                sum -= nums[l];
                l++;
            }

            count += r - l + 1;
        }

        return count;
    }

   return atMost(goal) - atMost(goal - 1);
};