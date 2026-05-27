/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const newRoot = [];

        const preOrder = (node,res)=>{
            if (!node) return 

            res.push(node.val)

            preOrder(node.left,res)
            preOrder(node.right,res)
        }

            preOrder(root,newRoot)
            return newRoot

    }
}
