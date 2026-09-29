/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) { // Time: O(n), Space: O(1)
//     let i = 0;
    
//     while (i < nums.length) {
//         let j = i;
//         if (j + 1 < nums.length && nums[j + 1] === nums[i]) {
//             while (j + 1 < nums.length && nums[j + 1] === nums[i]) {
//                 nums[j + 1] = null;
//                 j++;
//             }

//             i = j + 1;
//         } else {
//             i++;
//         }
//     }

//     let toMove = 0;

//     for (let k = 0; k < nums.length; k++) {
//         if (nums[k] !== null) {
//             [nums[k], nums[toMove]] = [nums[toMove], nums[k]];
//             toMove++;
//         }
//     }

//     return toMove;
// };

var removeDuplicates = function(nums) { // Time: O(n), Space: O(1)
    let toMove = 1;

    for (let k = 1; k < nums.length; k++) {
        if (nums[k] !== nums[k - 1]) {
            nums[toMove] = nums[k];
            toMove++;
        }
    }

    return toMove;
};