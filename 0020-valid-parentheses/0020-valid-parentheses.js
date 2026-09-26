/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { // Time: O(n), Space: O(n)
    const stack = [];
    const grp = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    
    for (let ch of s) {
        if (ch === "{" || ch === "(" || ch === "[") {
            stack.push(ch);
        } else {
            const prev = stack.pop();

            if (ch !== grp[prev]) return false;
        }
    }

    return stack.length === 0
};