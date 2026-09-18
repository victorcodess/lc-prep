/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) { // Time: O(1), Space: O(1)
    if (n < 1000) return 0;

    return n - 1000 + 1
};