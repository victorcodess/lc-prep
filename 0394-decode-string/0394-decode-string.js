/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) { // Time: O(n * n), Space: O(n)
    let i = 0;

    const stack = [];
    const result = [];

    while (i < s.length) {
        while (s[i] !== "]" && i < s.length) {
            stack.push(s[i]);
            i++;
        }
        
        if (i >= s.length) break;

        let str = [];
        while (stack[stack.length - 1] !== "[") {
            str.push(stack.pop());
        }

        stack.pop();

        const nums = [];
        while (stack[stack.length - 1] >= "0" && stack[stack.length - 1] <= "9") {
            nums.push(stack.pop());
        }

        num = Number(nums.reverse().join(""));

        str = str.reverse().join("");

        const decoded = new Array(num).fill(str).join("");

        stack.push(decoded);

        i++;
    }

    return stack.join("");
};

