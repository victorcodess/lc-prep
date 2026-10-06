/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) { // Time: O(nlog(n)), Space: O(n)
    arr.sort((a, b) => a - b);
    let minD = Infinity;
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff === minD) res.push([arr[i], arr[i + 1]]);
        else if (diff < minD) {
            minD = diff;
            res = [];
            res.push([arr[i], arr[i + 1]]);
        }
    }

    return res;
};