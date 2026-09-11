/**
 * Input: n > 1, grid can't be empty;
 * 
 * Output: num of ways to get to top right;
 * 
 * Edge cases: can top and right direc
 * 
 * Approach: a dfs to the top right and return num of ways to get there; and store calc in memo
 * 
 * col: 0, n-2
 * row: 0, n-2
 * 
 * 
 * 
 * Time: O(2^(m+n)), O(m * n)
 * Space: O(2^(m+n)), O(m * n)
 * 
 */


function numOfPathsToDest(n) {
    const memo = new Map();
    return findPaths(n, n - 1, 0, memo);
}

function findPaths(n, r, c, memo) {
    if (0 > r || r >= n || 0 > c || c >= n) return 0;
    // n = 10, r = 2, c = 4
    if ((r >= 0 && r < n - 2) && (c >= 0 && c < n - 2)) return 0; 
    if (r === n - 1 && c === n - 1) return 1;

    const key = r + "," + c;
    if (memo.has(key)) return memo.get(key);

    const deltas = [
        [0, 1],
        [1, 0]
    ]

    let paths = 0;

    for (let [dR, dC] of deltas) {
        paths += findPaths(n, r + dR, c + dC, memo);
    }

    memo.set(key, paths);
    return paths;
}

console.log(numOfPathsToDest(4))


/*


j=3 |  .   .   .   .? 
j=2 |  .   .   .   .
j=1 |  .   .   .   .
j=0 |  .   .   .   .
    +----------------
      i=0 i=1 i=2 i=3

i=0 |  .   .   .   . 
i=1 |  .   .   .   .
i=2 |  .   .   .   .
i=3 |  .   .   .   .
    +----------------
      j=0 j=1 j=2 j=3

(3, 0) -> (0,3)
purpose: (0,3) -> (3,0)
(i, j)



*/
