/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) { // Time: O(1), Space: O(1)
    while (b !== 0) {
        const sum = a ^ b;
        const carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;
};