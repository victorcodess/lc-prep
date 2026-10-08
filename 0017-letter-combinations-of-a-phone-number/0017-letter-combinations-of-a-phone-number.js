/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) { // Time: O(3^n), Space: O(n)
    const phn = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz",
    }

    const res = [];
    const grp = [];

    function dfs(i) {
        if (i >= digits.length) {
            const ans = grp.slice().join("");
            res.push(ans);

            return;
        }

        const num = digits[i];
        const arr = phn[num];

        for (let k = 0; k < arr.length; k++) {
            grp.push(arr[k]);
            dfs(i + 1);
            grp.pop();
        }

        return;
    }

    dfs(0);

    return res;
};