/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

var minDepth = root => {
    if (root === null) {
        return 0;
    } else {
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
}