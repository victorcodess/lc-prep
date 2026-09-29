/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) { // Time: O(n), Space: O(1)
    if (x === 0) return 0;
    let res = 1;

    for (let i = 1; i <= (x / 2); i++) {
        if (i * i > x) break;
        res = i;
    }

    return res;
};