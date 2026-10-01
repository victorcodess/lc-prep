/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) { // Time: O(n + m), Space: O(n + m)
//     if (!root) return null;

//     function fillPath(root, node) {
//         if (root === null) return [];
//         if (root === node) return [ root ];

//         const left = fillPath(root.left, node);
//         if (left.length > 0) {
//             return [root, ...left];
//         }

//         const right = fillPath(root.right, node);
//         if (right.length > 0) {
//             return [root, ...right];
//         }

//         return [];
//     }
    
//     const pathP = fillPath(root, p);
//     const pathQ = fillPath(root, q);

//     console.log(pathP, pathQ)

//     for (let i = pathP.length - 1; i >= 0; i--) {
//         const nodeP = pathP[i];
//         for (let j = pathQ.length - 1; j >= 0; j--) {
//             const nodeQ = pathQ[j];
//             if (nodeP === nodeQ) return nodeP;
//         }
//     }

//     return null;
// };

var lowestCommonAncestor = function(root, p, q) { // Time: O(n), Space: O(n)
    if (!root) return null;
    if (root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    } else {
        return left || right;
    }
}