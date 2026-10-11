/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) { // Time: O(n^2), Space: O(n)
    const stack = [];

    for (let ch of tokens) {
        if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
            const right = stack.pop();
            const left = stack.pop();
            let res = null;

            if (ch === "+") {
                res = Math.trunc(left + right);
            } else if (ch === "-") {
                res = Math.trunc(left - right);
            } else if (ch === "*") {
                res = Math.trunc(left * right);
            } else if (ch === "/") {
                res = Math.trunc(left / right);
            }

            stack.push(res);
        } else {
            stack.push(Number(ch));
        }
    }

    return stack[0];
};