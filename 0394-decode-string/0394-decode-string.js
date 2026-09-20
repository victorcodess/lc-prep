/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // 3,a,2,c
    // 3,a,cc
    // accaccacc

    // 2

    let i = 0;


    const stack = [];
    const result = [];

    while (i < s.length) {
        while (s[i] !== "]" && i < s.length) {
            stack.push(s[i]);
            i++;
        }
        // console.log(stack, i, s.length)

        // console.log(stack, i);
        if (i >= s.length) break;

        let str = [];
        while (stack[stack.length - 1] !== "[") {
            str.push(stack.pop());
        }

        stack.pop();

// console.log(stack, i, str);
        const nums = [];
        while (stack[stack.length - 1] >= "0" && stack[stack.length - 1] <= "9") {
            nums.push(stack.pop());
        }

        num = Number(nums.reverse().join(""));

        str = str.reverse().join("");
        // console.log(stack, i, str);

        const decoded = new Array(num).fill(str).join("");

        stack.push(decoded);

        i++;
    }

    console.log(stack)

    return stack.join("");
};

