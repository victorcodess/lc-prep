/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) { // Time: O(n^2), Space: O(n)
    const stack = [];
    let i = 0;

    while (i < s.length) {
        if (s[i] === ")") {
            const curr = [];

            while (stack[stack.length - 1] !== "(") {
                curr.push(stack.pop());
            }

            stack.pop();

            stack.push(...curr);
        } else {
            stack.push(s[i]);
        }

        i++;
    }

    const res = stack.join("");
    return res;
};