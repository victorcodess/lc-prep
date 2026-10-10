/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) { // Time: O(n), Space: O(n)
   const pMap = new Map([[0, 1]]);
   let pSum = 0;
   let count = 0;

   for (let i = 0; i < nums.length; i++) {
        pSum += nums[i];

        const need = pSum - goal;

        if (pMap.has(need)) {
            count += pMap.get(need);
            pMap
        }

        pMap.set(pSum, (pMap.get(pSum) || 0) + 1);
   }

   return count;
};