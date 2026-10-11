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
// var isValidBST = function(root) {
//     function validate(root, ) {
//         if (!root) return [-Infinity, Infinity, true];

//         const [minL, maxL, leftV] = validate(root.left);
//         const [minR, maxR, rightV] = validate(root.right);

//         // if (leftS && left >= root.val) return false;
//         // if (rightS && right <= root.val) return false;

//         return [Math.min(root.val, minL, minR), Math.max(root.val, maxL, maxR), leftV && rightV];
//     }

//     const res = validate(root);
//     console.log(res);

    
// };

var isValidBST = function(root) { // Time: O(n), Space: O(n)
    function inOrder(root) {
       if (!root) return;

       inOrder(root.left);
       arr.push(root.val);
       inOrder(root.right);
    }

    const arr = [];
    inOrder(root);
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] <= arr[i]) return false;
    }

    return true;
};