/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) { // Time: O((n * m)^2), Space: O(n * m)
//     const N = board.length;
//     const M = board[0].length;

//     const visited = new Set();

//     function dfs(r, c, i) {
//         if (0 > r || r >= N || 0 > c || c >= M) return false;
//         if (board[r][c] !== word[i]) return false;

//         const key = r + "," + c;
//         if (visited.has(key)) return false;
//         visited.add(key);

//         if (i === word.length - 1) return true;

//         const deltas = [
//             [0, 1],
//             [0, -1],
//             [1, 0],
//             [-1, 0],
//         ];

//         for (let [dr, dc] of deltas) {
//             const nr = r + dr;
//             const nc = c + dc;

//             if (dfs(nr, nc, i + 1)) return true;
//         }

//         visited.delete(key);
//         return false;
//     }

//     for (let r = 0; r < N; r++) {
//         for (let c = 0; c < M; c++) {
//             if (board[r][c] === word[0]) {
//                 if (dfs(r, c, 0)) return true;
//             }
//         }
//     }

//     return false;
// };

var exist = function(board, word) { // Time: O((n * m) * 3^k), Space: O(n * m)
    const N = board.length;
    const M = board[0].length;

    function dfs(r, c, i) {
        if (0 > r || r >= N || 0 > c || c >= M) return false;
        if (board[r][c] !== word[i]) return false;

        const key = r + "," + c;
        if (board[r][c] === "*") return false;
        
        const ch = board[r][c];
        board[r][c] = "*";

        if (i === word.length - 1) return true;

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        for (let [dr, dc] of deltas) {
            const nr = r + dr;
            const nc = c + dc;

            if (dfs(nr, nc, i + 1)) return true;
        }

        board[r][c] = ch;
        return false;
    }

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (board[r][c] === word[0]) {
                if (dfs(r, c, 0)) return true;
            }
        }
    }

    return false;
};