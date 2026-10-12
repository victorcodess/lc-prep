/**
 * @param {string} s
 * @return {number}
 */
    var calculate = function(s) { // Time: O(d + a), Space: O(n)
    const stack = [];
    let i = 0;

    function isNum(ch) {
        return (ch >= "0" && ch <= "9") || (ch >= 0 && ch <= (2 ** 31) - 1);
    }

    while (i < s.length) {
        let ch = s[i];

        if (ch === " ") {
            i++;
        } else if (isNum(ch)) {
            let j = i;

            while (isNum(s[j])) {
                j++;
            }

            const num = Number(s.slice(i, j));
            stack.push(num);

            i = j;
        } else {
            stack.push(ch);
            i++;
        }
    }

    if (stack.length === 1) return stack[0];

    const stk2 = [];
    let k = 0;

    while (k < stack.length) {
        let ch = stack[k];

        if (isNum(ch) || ch === "+" || ch === "-") {
            stk2.push(ch);
            k++;
        } else {
            if (ch === "*") {
                stk2[stk2.length - 1] = Math.floor(stk2[stk2.length - 1] * stack[k + 1]);
            } else if (ch === "/") {
                stk2[stk2.length - 1] = Math.floor(stk2[stk2.length - 1] / stack[k + 1]);
            } 

            k += 2;
        }
    }

    if (stk2.length === 1) return stk2[0];

    const stk3 = [];
    let l = 0;

    while (l < stk2.length) {
        let ch = stk2[l];

        if (isNum(ch)) {
            stk3.push(ch);
            l++;
        } else {
            if (ch === "+") {
                stk3[stk3.length - 1] = Math.floor(stk3[stk3.length - 1] + stk2[l + 1]);
            } else if (ch === "-") {
                stk3[stk3.length - 1] = Math.floor(stk3[stk3.length - 1] - stk2[l + 1]);
            } 

            l += 2;
        }
    }

    return stk3[0];
};