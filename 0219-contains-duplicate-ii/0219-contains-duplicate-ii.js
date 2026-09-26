/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) { // Time: O(n * m), Space: (d)
//     const indices = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const key = String(nums[i]);

//         if (indices.has(key)) {
//             for (let idx of indices.get(key)) {
//                 if (Math.abs(idx - i) <= k) {
//                     return true;
//                 }
//             }
//         } else {
//             indices.set(key, []);
//         }

//         indices.get(key).push(i);
//     }

//     return false;
// };

var containsNearbyDuplicate = function(nums, k) { // Time: O(n), Space: (k)
    const indices = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (indices.has(nums[i])) {
            return true;
        } 

        indices.add(nums[i]);

        while (indices.size > k) {
            indices.delete(nums[i - k]);
        }
    }

    return false;
};