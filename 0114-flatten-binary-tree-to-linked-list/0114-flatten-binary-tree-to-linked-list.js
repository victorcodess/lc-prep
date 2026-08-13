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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) return null;

    const stack = [root];
    let previous = null

    while (stack.length) {
        const current = stack.pop()

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);

        current.right = null;
        current.left = null;

        if (previous) previous.right = current;
        previous = current;
    }

    return root;
};