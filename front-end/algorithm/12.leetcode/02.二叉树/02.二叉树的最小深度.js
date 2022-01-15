/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * 注意是根节点到叶节点的路径上的节点数量
 * 递归迭代的过程会遇到如下情况
 *   叶节点：左右子树都为null
 *   非叶非根节点：
 *     左右子树仅有一颗：取仅有的一颗子树的高度
 *     左右子树都有：取两颗子树的高度的较小值
 */

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
 * @return {number}
 */
 var minDepth = root => {
    if (root === null) {
        return 0;
    }
    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    if (leftHeight === 0 && rightHeight === 0) {
        return 1;
    }
    if (leftHeight === 0 && rightHeight !== 0 || leftHeight !== 0 && rightHeight === 0) {
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return Math.min(leftHeight, rightHeight) + 1;
}
