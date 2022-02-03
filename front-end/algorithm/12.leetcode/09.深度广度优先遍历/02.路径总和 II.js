/**
 * 113. 路径总和 II
 * https://leetcode-cn.com/problems/path-sum-ii/
 */

/**
 * 参数stack记录当前已遍历过的节点 
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
/**
 * 
 * @param {*} node 先序遍历的根节点
 * @param {*} stack 已遍历节点
 * @param {*} targetSum 目标值
 * @param {*} res 最终结果
 */
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
