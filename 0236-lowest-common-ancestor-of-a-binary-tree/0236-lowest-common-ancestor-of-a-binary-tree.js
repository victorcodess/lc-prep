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
//             left.push(root)
//             return left;
//         }

//         const right = fillPath(root.right, node);
//         if (right.length > 0) {
//             right.push(root)
//             return right;
//         }

//         return [];
//     }
    
//     const pathP = fillPath(root, p);
//     const pathQ = fillPath(root, q);

//     console.log(pathP, pathQ)
//     let lca = null;

//     for (let i = 0; i < Math.min(pathP.length, pathQ.length); i++) {
//         const nodeP = pathP[i];
//         const nodeQ = pathQ[i];
//         if (nodeP !== nodeQ) break;
//         lca = nodeP;
//     }

//     return lca;
// };

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root; // hit a target or empty
    const left = lowestCommonAncestor(root.left, p, q);   // search left
    const right = lowestCommonAncestor(root.right, p, q); // search right
    if (left && right) return root; // p and q in different subtrees
    return left || right;           // both in one subtree, or one is ancestor
};