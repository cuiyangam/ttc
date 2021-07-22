// 递归函数模板

// 递归终止条件
// 处理本层逻辑
// 向下递归
// 清理本层状态

// https://leetcode-cn.com/problems/climbing-stairs/
// + 第一阶梯一种方法f(1)
// + 第二阶梯两种方法f(2)
// + 到达第三阶梯之前可以是迈了一步，也可以是迈了两步，所以方法总数f(3) = f(2) + f(1);
// + 同理可得f(x) = f(x - 1) + f(x - 2)
var climbStairs = function(n) {
    if(n === 2 || n === 1) {
        return n;
    }
    let prepre = 1;
    let pre = 2;
    let curr = 0;
    
    let step = 3;
    while(step++ <= n) {
        curr = prepre + pre;
        prepre = pre;
        pre = curr;
    }
    return curr;
}
console.log(climbStairs(4));

// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let r = [];
    gen(0, 0, n, '', r);
    return r;
};
var gen = function(left, right, n, s, r) {
    if(left === n && right === n) {
        r.push(s);
        return;
    }
    if(left < n) {
        gen(left + 1, right, n, s + '(', r);
    }
    if(left > right) {
        gen(left, right + 1, n, s + ')', r);
    }
}

console.log(generateParenthesis(3));

// https://leetcode-cn.com/problems/validate-binary-search-tree

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
 const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

// 翻转二叉树
// 镜面对称在每一层深度的树依次生效
// https://leetcode-cn.com/problems/invert-binary-tree/description/
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};


// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
var maxDepth = root => {
    if (root === null) {
        return 0;
    } else {
        let leftHeight = maxDepth(root.left);
        let rightHeight = maxDepth(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
var minDepth = root => {
    if (root === null) {
        return 0;
    } else {
        let leftHeight = minDepth(root.left);
        let rightHeight = minDepth(root.right);
        if(leftHeight === 0 && rightHeight === 0) {
            return 1;
        }
        if(leftHeight === 0 && rightHeight !== 0 || leftHeight !== 0 && rightHeight === 0) {
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return Math.min(leftHeight, rightHeight) + 1;
    }
}

// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    return rserialize(root, '');
};

var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
    if (root === null) {
        str += "None,";
    } else {
        str += root.val + '' + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList[0] === "None") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}

//https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        } 
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

let indexMap = new Map();

var myBuildTree = (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) => {
    if (preorder_left > preorder_right) {
        return null;
    }

    // 前序遍历中的第一个节点就是根节点
    let preorder_root = preorder_left;
    // 在中序遍历中定位根节点
    let inorder_root = indexMap.get(preorder[preorder_root]);
    
    // 先把根节点建立出来
    let root = new TreeNode(preorder[preorder_root]);
    // 得到左子树中的节点数目
    let size_left_subtree = inorder_root - inorder_left;
    // 递归地构造左子树，并连接到根节点
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
    // 递归地构造右子树，并连接到根节点
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
    return root;
}

var buildTree = (preorder, inorder) => {
    let n = preorder.length;
    // 构造哈希映射，帮助我们快速定位根节点
    for (let i = 0; i < n; i++) {
        indexMap.set(inorder[i], i);
    }
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}
