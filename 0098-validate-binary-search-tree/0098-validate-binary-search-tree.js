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
 * @return {boolean}
 */
var isValidBST = function(root, lb = -Infinity, up = Infinity) { // Time: O(n), Space: O(n)
    if (!root) return true;

    if (root.val <= lb || root.val >= up) return false;

    const left = isValidBST(root.left, lb, root.val);
    const right = isValidBST(root.right, root.val, up);

    return left && right;
};

// var isValidBST = function(root) { // Time: O(n), Space: O(n)
//     function inOrder(root) {
//        if (!root) return;

//        inOrder(root.left);
//        arr.push(root.val);
//        inOrder(root.right);
//     }

//     const arr = [];
//     inOrder(root);
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] <= arr[i]) return false;
//     }

//     return true;
// };