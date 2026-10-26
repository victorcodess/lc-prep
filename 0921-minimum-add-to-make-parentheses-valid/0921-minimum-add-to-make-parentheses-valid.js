/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) { // Time: O(n), Space: O(1)
    let cnt = 0;
    let open = 0;

    for (let ch of s) {
        if (ch === "(") open++;
        else {
            if (open < 1) cnt++;
            else open--;
        }
    }

    return open + cnt;
};