/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) { // Time: O(n), Space: O(n)
    const stack = [];
    // (()(())) 0,1,0,2

    for (let ch of s) {
        if (ch === "(") {
            stack.push(0);
        } else {
            let prev = stack.length - 1;

            if (stack[prev] === 0) {
                stack[prev] = 1;
            } else {
                let sum = 0;

                while (stack[prev] !== 0) {
                    sum += stack.pop();
                    prev = stack.length - 1;
                }
                
                stack[prev] = sum * 2;
            }
        }
    }

    const res = stack.reduce((a, b) => a + b, 0);
    return res;
};