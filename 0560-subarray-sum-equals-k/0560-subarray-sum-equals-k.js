/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let prefixSum = 0;
  let prefixMap = new Map([[0, 1]]);
  let count = 0;

  for (let num of nums) {
    prefixSum += num;

    const remainder = prefixSum - k;
    if (prefixMap.has(remainder)) {
      count += prefixMap.get(remainder);
    }

    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }

  return count;
};

