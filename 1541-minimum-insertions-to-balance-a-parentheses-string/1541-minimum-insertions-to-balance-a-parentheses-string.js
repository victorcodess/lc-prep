/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const stack = [];
    let cnt = 0;
    let i = 0;

    while (i < s.length) {
        const ch = s[i];
        let skip = 0;

        if (ch === "(") {
            stack.push("(");
        } else {
            if (stack.length === 0) {
                cnt++;
            }
            if (i + 1 < s.length && s[i + 1] === ")") {
                if (stack.length) stack.pop();
                skip = 1;
            } else {
                cnt++;
                if (stack.length) stack.pop();
            }
        }

        i += 1 + skip;
    }

    console.log(stack, cnt)
    return cnt + stack.length * 2;
};