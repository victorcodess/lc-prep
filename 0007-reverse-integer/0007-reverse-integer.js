/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { // Time: O(n), Space: O(1)
    let num = 0;

    const MAX = (2 ** 31) - 1;
    const MIN = -1 * (2 ** 31);

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        if (num > MAX / 10) return 0;
        if (num < MIN / 10) return 0;
        if (num === Math.trunc(MAX / 10) && digit >= 7) return 0;
        if (num === Math.trunc(MIN / 10) && digit <= -8) return 0;

        num = (num * 10) + digit;
    }

    return num;
};