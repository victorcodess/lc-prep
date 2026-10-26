/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) { // Time: O(log(n)), Space: O(1)
    if (x === 1 || n === 0) return 1;
    if (x === 0 || n === 1) return x;

    const neg = n < 0;
    let p = Math.max(n, -n);
    let res = 1;

    while (p > 0) {
        if (p % 2 === 1) res *= x;
        x *= x;
        p = Math.floor(p / 2);
    }

    return neg ? 1 / res : res;
};