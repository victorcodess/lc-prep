/**
 * @param {string} s
 * @return {number}
 */
// var minInsertions = function(s) { // Time: O(n), Space: O(n)
//     const stack = [];
//     let cnt = 0;
//     let i = 0;

//     while (i < s.length) {
//         const ch = s[i];
//         let skip = 0;

//         if (ch === "(") {
//             stack.push("(");
//         } else {
//             if (stack.length === 0) {
//                 cnt++;
//             }

//             if (i + 1 < s.length && s[i + 1] === ")") {
//                 if (stack.length) stack.pop();
//                 skip = 1;
//             } else {
//                 cnt++;
//                 if (stack.length) stack.pop();
//             }
//         }

//         i += 1 + skip;
//     }

//     return cnt + stack.length * 2;
// };

var minInsertions = function(s) { // Time: O(n), Space: O(1)
    let open = 0;
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === "(") {
            open++;
        } else {
            if (i + 1 < s.length && s[i + 1] === ")") {
                i++;
            } else {
                cnt++;
            }

            if (open > 0) {
                open--;
            } else {
                cnt++;
            }
        }

    }

    return cnt + open * 2;
};