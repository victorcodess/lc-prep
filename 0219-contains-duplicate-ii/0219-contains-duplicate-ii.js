/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) { // Time: O(n * m), Space: (n)
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const key = String(nums[i]);

        if (indices.has(key)) {
            for (let idx of indices.get(key)) {
                if (Math.abs(idx - i) <= k) {
                    return true;
                }
            }
        } else {
            indices.set(key, []);
        }

        indices.get(key).push(i);
    }

    return false;
};