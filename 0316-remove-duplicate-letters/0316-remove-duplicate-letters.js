/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) { // Time: O(n), Space: O(n)
    const last = new Map();
    const seen = new Set();
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (seen.has(ch)) continue;

        while (stack.length 
        && stack[stack.length - 1] > ch 
        && last.get(stack[stack.length - 1]) > i) {
            const prev = stack.pop();
            seen.delete(prev);
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join("");
};