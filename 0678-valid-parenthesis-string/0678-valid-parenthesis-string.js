/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) { // Time: O(n), Space: O(1)
    let minL = 0;
    let maxL = 0;

    for (let ch of s) {
        if (ch === "(") {
            minL++;
            maxL++;
        } else if (ch === ")") {
            minL--;
            maxL--;
        } else {
            minL--;
            maxL++;
        }
        
        minL = Math.max(0, minL);

        if (maxL < 0) return false;
    }

    return minL === 0;
};