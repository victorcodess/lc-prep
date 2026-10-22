/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) { // Time: O(n), Space: O(n)
    function dfs(root) {
        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        return 1 + Math.max(left, right);
    }

    const height = dfs(root);
    const rows = height;
    const cols = (2 ** rows) - 1;  

    const grid = Array.from({ length: rows }, () => Array(cols).fill(""));

    function place(root, r, c) {
        if (!root) return;

        grid[r][c] = String(root.val);

        place(root.left, r + 1, c - (2 ** (rows - r - 2)));
        place(root.right, r + 1, c + (2 ** (rows - r - 2)));
    }

    place(root, 0, (cols - 1) / 2);

    return grid;
};