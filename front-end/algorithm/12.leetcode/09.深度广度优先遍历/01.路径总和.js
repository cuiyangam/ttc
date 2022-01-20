/**
 * 112. 路径总和
 * https://leetcode-cn.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }
    return preOrder(root, 0, targetSum);
};

/**
 * 
 * @param {*} node 先序遍历的根节点
 * @param {*} prevValue 已遍历节点的数值之和
 * @param {*} targetSum 目标值
 * @returns 
 */
const preOrder = (node, prevValue, targetSum) => {
    const curr = node.val + prevValue;
    if (node.left === null && node.right === null && curr === targetSum) {
        return true;
    }
    if (node.left && preOrder(node.left, curr, targetSum)) {
        return true
    }
    if (node.right && preOrder(node.right, curr, targetSum)) {
        return true;
    }
    return false;
}
