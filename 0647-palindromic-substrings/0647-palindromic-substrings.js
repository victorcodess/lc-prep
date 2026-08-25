/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) { // Time: O(n), Space: O(1)
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count += findPalin(s, i, i);
        count += findPalin(s, i, i + 1);
    }

    return count;    
};

var findPalin = function(s, left, right) {
    let result = 0;

    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
        result++;
        left--;
        right++;
    }

    return result;
}

