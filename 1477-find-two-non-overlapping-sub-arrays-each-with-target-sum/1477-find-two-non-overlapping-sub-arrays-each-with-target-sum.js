/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// var minSumOfLengths = function(arr, target) { // Time: O(n + rlog(r)), Space: O(r)
//     let i = 0;
//     let j = 0;

//     let sum = 0;
//     const lens = [];

//     while (j < arr.length) {
//         sum += arr[j];

//         while (sum > target) {
//             sum -= arr[i];
//             i++;
//         }

//         if (sum === target) {
//             lens.push(j - i + 1);
//             i = j + 1;
//             j = i;
//             sum = 0;
//         } else {
//             j++;
//         }
//     }

//     lens.sort((a, b) => a - b);

//     if (lens.length <= 1) {
//         return -1;
//     } else {
//         return lens[0] + lens[1];
//     }
// };

// var minSumOfLengths = function(arr, target) { // Time: O(n^2), Space: O(n)
//     const memo = new Map();

//     function dfs(i, count) {
//         if (count === 2) return 0;
//         if (i >= arr.length) return Infinity;

//         const key = i + "," + count;
//         if (memo.has(key)) return memo.get(key);

//         let skip = dfs(i + 1, count);

//         let start = Infinity;
//         let sum = 0;

//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];

//             if (sum === target) {
//                 const len = j - i + 1;
//                 start = len + dfs(j + 1, count + 1);
//                 break;
//             }

//             if (sum > target) break;
//         }

//         const res = Math.min(skip, start);

//         memo.set(key, res);
//         return res;
//     }

//     const result = dfs(0, 0);

//     return result === Infinity ? -1 : result;
// };

var minSumOfLengths = function(arr, target) { // Time: O(n), Space: O(n)
    let dp = new Array(target.length).fill(Infinity);

    let l = 0;
    let sum = 0;
    let minLen = Infinity;
    let result = Infinity;

    for (let r = 0; r < arr.length; r++) {
        sum += arr[r];

        while (sum > target) {
            sum -= arr[l];
            l++;
        }

        if (sum === target) {
            const len = r - l + 1;

            if (l > 0) {
                result = Math.min(result, len + dp[l - 1]);
            }

            minLen = Math.min(len, minLen);
        }

        dp[r] = minLen;
    }
    

    return result === Infinity ? -1 : result;
};