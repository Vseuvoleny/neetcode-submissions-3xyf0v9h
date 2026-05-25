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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(node){
            if (!node){
                return {state:1,height:0}
            }
            const left = dfs(node.left)
            const right = dfs(node.right)

            const balanced = left.state === 1 && right.state === 1 && Math.abs(left.height - right.height)<= 1
            return {state: balanced ? 1 : 0,height:1 + Math.max(left.height, right.height)}
        }
        return dfs(root).state === 1
    }
}
