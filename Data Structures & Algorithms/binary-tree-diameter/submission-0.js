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
     * @return {number}
     */


    diameterOfBinaryTree(root) {
        let result = 0;
        const  dfs=(node)=>{
        if (!node){
            return 0
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        result = Math.max(result,left+right);
        return 1+Math.max(left,right)
    }
        dfs(root)
        return result
    }
}
