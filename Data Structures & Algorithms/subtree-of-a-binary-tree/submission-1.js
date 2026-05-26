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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {


        const isSameTree = (n1,n2)=>{
            if (!n1 && !n2){
                return true
            }
            if ((!n1 || !n2) || (n1.val !== n2.val)){
                return false
            }
            return isSameTree(n1.left,n2.left) && isSameTree(n1.right,n2.right)

        }

        const dfs = (node)=>{
            if (!node){
                return false
            }

            if (node.val === subRoot.val && isSameTree(node,subRoot)){
return true
                
            }

            return dfs(node.left) || dfs(node.right)
        }
        return dfs(root)

    }
}
