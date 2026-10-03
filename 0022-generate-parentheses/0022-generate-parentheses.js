/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n, l = 0, r = 0, memo = new Map()) { // Time: O(n * n), Space: O(n * n)
//     if (r > l) return [];
//     if (l === n && r === n) return [ "" ];

//     const key = l + "," + r;
//     if (memo.has(key)) return memo.get(key);

//     const res = [];

//     if (l < n) {
//         const rest = generateParenthesis(n, l + 1, r, memo);
//         for (let pair of rest) {
//             res.push("(" + pair);
//         }
//     } 
    
//     if (r < l) {
//         const rest = generateParenthesis(n, l, r + 1, memo);
//         for (let pair of rest) {
//             res.push(")" + pair);
//         }
//     }

//     memo.set(key, res);
//     return res;
// };

var generateParenthesis = function(n) { // Time: O((4 ** n) / n sqrt(n)), Space: O(n)
    const stack = [];
    const res = [];

    function dfs(l, r) {
        if (l === n && r === n) {
            const cpy = stack.slice(0);
            res.push(cpy.join(""));
            return;
        }

        if (r > l) return;

        if (l < n) {
            stack.push("(");
            dfs(l + 1, r);
            stack.pop();
        } 
        
        if (r < l) {
            stack.push(")");
            dfs(l, r + 1);
            stack.pop();
        }
    }

    dfs(0, 0);

    return res;
};