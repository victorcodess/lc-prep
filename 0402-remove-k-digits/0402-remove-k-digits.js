/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) { // Time: O(n), Space: O(1)
    if (num.length === 1) return "0";
    let stack = [];

    for (let i = 0; i < num.length; i++) {
        while (stack.length && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let z = 0;
    while (stack[z] === "0" && stack.length > 1) {
        z++;
    }

    const result = stack.slice(z).join("");

    return result === "" ? "0" : result;
};