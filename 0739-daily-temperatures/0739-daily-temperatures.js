/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) { // Time: O(n), Space: O(n)
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const prev = stack.pop();
            res[prev] = i - prev;
        }

        stack.push(i);
    }

    return res;
};