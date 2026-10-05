/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) { // Time: O(log(3)), Space: O(1)
    if (n === 1) return true;

    let num = 3;

    while (num < n) {
        num *= 3;
    }

    return num === n;
};