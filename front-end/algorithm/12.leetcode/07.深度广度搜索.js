// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description

var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
        
    return ret;
};


// https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description

// https://leetcode-cn.com/problems/generate-parentheses/#/description

// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description

// https://leetcode-cn.com/problems/number-of-islands/
var numIslands = (grid) => {
    let islandNum = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1'){
                infect(grid, i, j);
                islandNum++;
            }
        }
    }
    return islandNum;
}
//感染函数
var infect = (grid, i, j) => {
    if(i < 0 || i >= grid.length ||
        j < 0 || j >= grid[0].length || grid[i][j] != '1'){
        return;
    }
    grid[i][j] = '2';
    infect(grid, i + 1, j);
    infect(grid, i - 1, j);
    infect(grid, i, j + 1);
    infect(grid, i, j - 1);
}