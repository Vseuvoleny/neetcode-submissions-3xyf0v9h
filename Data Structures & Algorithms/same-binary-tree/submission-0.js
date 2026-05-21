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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function compare(node1, node2) {
            if (!node1 && !node2) {
                return true;
            }
            if (!node1 || !node2 || node1.val !== node2.val) {
                return false;
            }

            return compare(node1.left, node2.left) && compare(node1.right, node2.right);
        }
        
        return compare(p, q);
    }
}