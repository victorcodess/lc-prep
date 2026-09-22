// /**
//  * @param {number[][]} intervals
//  * @return {number[]}
//  */
// var maximumWeight = function(intervals) { // Time: O(n^2), Space: O(n^2)
//     intervals = intervals.map(([l, r, w], idx) => [l, r, w, idx]);
//     intervals.sort((a, b) => a[0] - b[0]);
//     const memo = new Map();

//     function findMax(i, prevE, count) {
//         if (i >= intervals.length || count >= 4) return [0, []];

//         const [l, r, w, idx] = intervals[i];
//         const key = i + "," + count + "," + prevE;
//         if (memo.has(key)) return memo.get(key);

//         if (l <= prevE) {
//             const result = findMax(i + 1, prevE, count);

//             memo.set(key, result);
//             return result;
//         } 

//         const [score, indexes] = findMax(i + 1, r, count + 1);
        
//         const take = [w + score, [...indexes, idx]];
//         const skip = findMax(i + 1, prevE, count);

//         let result = [];

//         if (take[0] > skip[0]) {
//             result = take;
//         } else if (skip[0] > take[0]) {
//             result = skip;
//         } else {
//             const arr1 = [...take[1]].sort((a, b) => a - b);
//             const arr2 = [...skip[1]].sort((a, b) => a - b);

//             if (isSmaller(arr1, arr2)) {
//                 result = take;
//             } else {
//                 result = skip;
//             }
//         }

//         memo.set(key, result);
//         return result;
//     }

//     function isSmaller(arr1, arr2) {
//         const N = Math.max(arr1.length, arr2.length);

//         for (let i = 0; i < N; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 return arr1[i] < arr2[i];
//             }
//         }

//         return true;
//     }

//     const [maxScore, indexList] = findMax(0, -1, 0);

//     return indexList.sort((a, b) => a - b);
// };

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) { // Time: O(nlog(n)), Space: O(n)
    intervals = intervals.map(([l, r, w], idx) => [l, r, w, idx]);
    intervals.sort((a, b) => a[0] - b[0]);
    const memo = new Map();

    function findMax(i, count) {
        if (i >= intervals.length || count >= 4) return [0, []];

        const key = i + "," + count;
        if (memo.has(key)) return memo.get(key);

        const [l, r, w, idx] = intervals[i];

        let left = i + 1;
        let right = intervals.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (intervals[mid][0] <= r) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } 

        const [score, indexes] = findMax(left, count + 1);
        
        const take = [w + score, [...indexes, idx]];
        const skip = findMax(i + 1, count);

        let result = [];

        if (take[0] > skip[0]) {
            result = take;
        } else if (skip[0] > take[0]) {
            result = skip;
        } else {
            const arr1 = [...take[1]].sort((a, b) => a - b);
            const arr2 = [...skip[1]].sort((a, b) => a - b);

            result = isSmaller(arr1, arr2) ? take : skip;
        }

        memo.set(key, result);
        return result;
    }

    function isSmaller(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return arr1[i] < arr2[i];
            }
        }

        return false;
    }

    const [maxScore, indexList] = findMax(0, 0);

    return indexList.sort((a, b) => a - b);
};

