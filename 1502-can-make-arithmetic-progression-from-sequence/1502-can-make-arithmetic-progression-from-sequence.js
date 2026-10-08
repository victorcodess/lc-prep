/**
 * @param {number[]} arr
 * @return {boolean}
 */
 // 5,7,1
 // 1,5,7
var canMakeArithmeticProgression = function(arr) { // Time: O(nlog(n)), Space: O(1)
    arr.sort((a, b) => a - b);

    let div = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        const currD = arr[i + 1] - arr[i];

        if (currD !== div) return false;
    }

    return true;
};