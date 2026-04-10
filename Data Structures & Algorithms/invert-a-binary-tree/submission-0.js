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
     * @return {TreeNode}
     */
    invertTree(root) {
     if (!root) return null; // Базовый случай: пустое дерево
    

    // Меняем местами левый и правый потомки
    [root.left, root.right] = [root.right, root.left];
    console.log({root,left:root.left,right:root.right})
    // Рекурсивно инвертируем левое и правое поддеревья
    this.invertTree(root.left);
    this.invertTree(root.right);
    
    return root;

    }
}
