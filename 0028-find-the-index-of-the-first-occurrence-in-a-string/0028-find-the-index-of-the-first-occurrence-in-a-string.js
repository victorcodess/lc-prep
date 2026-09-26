/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { // Time: O(n), Space: O(m)
    let i = 0;

    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i;
            }
        }

        i++;
    }

    return -1;
};