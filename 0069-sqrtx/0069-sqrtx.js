/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) { // Time: O(n), Space: O(1)
//     if (x === 0) return 0;
//     let res = 1;

//     for (let i = 1; i <= (x / 2); i++) {
//         if (i * i > x) break;
//         res = i;
//     }

//     return res;
// };

var mySqrt = function(x) { // Time: O(log(n)), Space: O(1)
    if (x <= 1) return x;
    let res = 1;

    let l = 2;
    let r = x / 2;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        const sqr = mid * mid;

        if (sqr > x) {
            r = mid - 1;
        } else {
            res = Math.max(res, mid);
            l = mid + 1;
        }
    }

    return res;
};