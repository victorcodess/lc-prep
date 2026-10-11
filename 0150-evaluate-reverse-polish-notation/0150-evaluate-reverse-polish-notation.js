/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) { // Time: O(n^2), Space: O(n)
    const stack = [];

    for (let ch of tokens) {
        if (ch === "+") {
            const right = stack.pop();
            const left = stack.pop();
            const res = Math.trunc(left + right);
            stack.push(res);
        } else if (ch === "-") {
            const right = stack.pop();
            const left = stack.pop();
            const res = Math.trunc(left - right);
            stack.push(res);
        } else if (ch === "*") {
            const right = stack.pop();
            const left = stack.pop();
            const res = Math.trunc(left * right);
            stack.push(res);
        
        } else if (ch === "/") {
            const right = stack.pop();
            const left = stack.pop();
            const res = Math.trunc(left / right);
            stack.push(res);
        } else {
            stack.push(Number(ch))
        }

        console.log(stack)
    }

    console.log(stack)

    return stack[0];
};