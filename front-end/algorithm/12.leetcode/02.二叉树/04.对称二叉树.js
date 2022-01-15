/**
 * 101. 对称二叉树
 * https://leetcode-cn.com/problems/symmetric-tree/
 */

/**
 * 如果左右子树都为空，判定为same
 * 如果左右子树有且仅有一颗为空，判定为false
 * 如果左右子树都不为空，则比较 俩兄弟节点值是否相等以及递归判定镜面对称的俩节点是否相同
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    let flag = same(root.left, root.right);
    return flag;
};

const same = (left, right) => {
    if (left === null && right === null) {
        return true;
    }
    if (left === null && right !== null || right === null && left !== null) {
        return false;
    }
    return left.val === right.val
        && same(left.left, right.right)
        && same(left.right, right.left);
}
