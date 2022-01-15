/**
 * 105. 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

/**
 * 根据先序遍历找到根节点
 * 找到根节点在中序遍历的下标，从未找到中序遍历左子树右子树
 * 根据中序遍历的左子树节点数量找到先序遍历左右子树节点数量，递归求得整棵树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = (preorder, inorder) => {
    if(preorder.length === 0 && inorder.length === 0) {
        return null;
    }
    if(preorder.length === 1 && inorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    const root = new TreeNode(preorder[0]);

    const index = inorder.indexOf(preorder[0]);
    const inorder_left = inorder.slice(0, index);
    const inorder_right = inorder.slice(index + 1);
    const preorder_left = preorder.slice(1, inorder_left.length + 1);
    const preorder_right = preorder.slice(inorder_left.length + 1);

    root.left = buildTree(preorder_left, inorder_left);
    root.right = buildTree(preorder_right, inorder_right);

    return root;
}
