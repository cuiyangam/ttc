/**
 * 102. 二叉树的层序遍历
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    if (!root) {
        return [];
    }
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let currentLevel = [];
        let currentLevelNum = queue.length;
        for (let i = 0; i < currentLevelNum; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(currentLevel);
    }
    return res;
};
