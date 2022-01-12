/**
 * 113. 路径总和 II
 * https://leetcode-cn.com/problems/path-sum-ii/
 */

var pathSum = function (root, targetSum) {
    if (!root) {
        return [];
    }
    let stack = [];
    let res = [];
    preOrder(root, stack, targetSum, res);
    return res;
};

const preOrder = (node, stack, targetSum, res) => {
    if (node) { // not leaf
        stack.push(node.val);
        preOrder(node.left, stack, targetSum, res);
        preOrder(node.right, stack, targetSum, res);
        if (!node.left && !node.right) { // leaf
            let pathTotalValue = stack.reduce((a, b) => a + b, 0);
            if (pathTotalValue === targetSum) {
                res.push([...stack]);
            }
        }
        stack.pop();
    }
}
