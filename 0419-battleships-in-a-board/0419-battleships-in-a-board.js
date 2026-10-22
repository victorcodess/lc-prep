/**
 * @param {character[][]} board
 * @return {number}
 */
// var countBattleships = function(board) { // Time: O(n * m), Space: O(1)
//     const M = board.length;
//     const N = board[0].length;
//     let count = 0;

//     function dfs(r, c, vert) {
//         if (r < 0 || r >= M || c < 0 || c >= N) return;
//         if (board[r][c] !== "X") return;

//         board[r][c] = "V";

//         const deltas = vert ? [
//             [1, 0],
//             [-1, 0],
//         ] : [
//             [0, 1],
//             [0, -1],
//         ]

//         for (let [dr, dc] of deltas) {
//             const nr = r + dr;
//             const nc = c + dc;

//             dfs(nr, nc, vert);
//         }
//     }

//     for (let r = 0; r < M; r++) {
//         for (let c = 0; c < N; c++) {
//             if (board[r][c] === "X") {
//                 if ((r + 1 < M && board[r + 1][c] === "X") || (r - 1 >= 0 && board[r - 1][c] === "X")) dfs(r, c, true);
//                 if ((c + 1 < N && board[r][c + 1] === "X") || (c - 1 >= 0 && board[r][c - 1] === "X")) dfs(r, c, false);
//                 count++;
//             }
//         }
//     }

//     return count;
// };

var countBattleships = function(board) { // Time: O(n * m), Space: O(1)
    const M = board.length;
    const N = board[0].length;
    let count = 0;

    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === "X") {
                if (r - 1 >= 0 && board[r - 1][c] === "X") continue;
                if (c - 1 >= 0 && board[r][c - 1] === "X") continue;
                count++;
            }
        }
    }

    return count;
};