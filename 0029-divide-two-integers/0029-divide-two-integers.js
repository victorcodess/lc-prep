/**
 * @param {number} divD
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) { // Time: O(log^2(n / m)), Space: O(1)
    if (dividend === -(2 ** 31) && divisor === -1) return (2 ** 31) - 1;

    let divD = Math.abs(dividend);
    let divS = Math.abs(divisor);
    let pos = (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0);

    let quotient = 0;

    while (divD >= divS) {
        let temp = divS;
        let multiple = 1;

        while (temp + temp <= divD) {
            temp += temp;
            multiple += multiple;
        }

        divD -= temp;
        quotient += multiple;
    }

    const res = pos ? quotient : -quotient;

    return res;
};