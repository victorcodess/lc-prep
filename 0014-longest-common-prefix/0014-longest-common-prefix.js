/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { // Time: O(n * avg(m)), Space: (min(m))
    if (strs.length === 1) return strs[0];

    let result = findMatch(strs[0], strs[1]);


    for (let i = 1; i < strs.length - 1; i++) {
        const match = findMatch(strs[i], strs[i + 1]);

        if (match.length < result.length) {
            result = match;
        } 
    }

    return result;
};

var findMatch = function(str1, str2) { 
    if (!str1.length || !str2.length) return "";

    let i = 0;
    let j = 0;

    const match = [];

    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            match.push(str1[i]);
            i++;
            j++;
        } else {
            break;
        }
    }

    return match.join("");
}