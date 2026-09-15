/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) { // Time: O(n), Space: O(n)
//     const result = [];

//     let closestToZero = [0, Infinity];

//     for (let k = 0; k < nums.length; k++) {
//         if (Math.abs(nums[k] - 0) <= closestToZero[1]) {
//             closestToZero = [k, Math.abs(nums[k])];
//         } else {
//             break;
//         }
//     }

//     let i = closestToZero[0] - 1;
//     let j = closestToZero[0];

//     console.log(i, j)

//     while (i >= 0 || j < nums.length) {
//         const a = i >= 0 ? Math.abs(nums[i]) : Infinity;
//         const b = j < nums.length ? Math.abs(nums[j]) : Infinity;

//         if (a < b) {
//             result.push(a * a);
//             i--;
//         } else {
//             result.push(b * b);
//             j++;
//         }
//     }

//     return result;
// };

var sortedSquares = function(nums) { // Time: O(n), Space: O(n)
    const result = new Array(nums.length).fill(0);

    let i = 0;
    let j = nums.length - 1;
    let pos = result.length - 1;

    while (i <= j) {
        const a = Math.abs(nums[i]);
        const b = Math.abs(nums[j]);

        if (a > b) {
            result[pos--] = a * a;
            i++;
        } else {
            result[pos--] = b * b;
            j--;
        }
    }

    return result;
};