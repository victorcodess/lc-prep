/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) { // Time: O(n), Space: O(1)
    const n = s.length;
    let min = s[0], max = s[0], sorted = true;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) sorted = false;
        if (s[i] < min) min = s[i];
        if (s[i] > max) max = s[i];
    }

    if (sorted || n === 1) return 0;
    if (n === 2) return -1;
    if (s[0] === min || s[n - 1] === max) return 1;

    for (let i = 1; i < n - 1; i++) {
        if (s[i] === min || s[i] === max) return 2;
    }

    return 3;
};