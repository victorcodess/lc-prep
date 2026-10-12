/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) { // Time: O(9^2 + 9^2 + 9^2), Space: O(9^2 + 9^2 + 9^2)
    // search rows
    for (let r = 0; r < 9; r++) {
        const rows = new Set();
        for (let c = 0; c < 9; c++) {
            const cell = board[r][c];
            if (rows.has(cell)) return false;
            if (cell !== ".") rows.add(cell);
        }
    }
    
    // search cols
    for (let c = 0; c < 9; c++) {
        const cols = new Set();
        for (let r = 0; r < 9; r++) {
            const cell = board[r][c];
            if (cols.has(cell)) return false;
            if (cell !== ".") cols.add(cell);
        }
    }

    // search blocks
    for (let l = 0; l < 9; l++) {
        const blocks = new Set();
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const cr = r + (Math.floor(l / 3) * 3);
                const cc = c + ((l % 3) * 3);
                const cell = board[cr][cc];

                if (blocks.has(cell)) return false;
                if (cell !== ".") blocks.add(cell);
            }
        }
    }

    return true;
};