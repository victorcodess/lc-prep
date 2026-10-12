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
 * @return {number[]}
 */
var rightSideView = function(root) { // Time: O(n), Space: O(n)
    if (!root) return [];

    const q = [[root, 0]];
    let head = 0;

    const res = [];

    while (head < q.length) {
        const [curr, lev] = q[head++];
        const next = head;

        if (next >= q.length || q[next][1] !== lev) res.push(curr.val);

        if (curr.left !== null) q.push([curr.left, lev + 1]);
        if (curr.right !== null) q.push([curr.right, lev + 1]);
    }

    return res;
};