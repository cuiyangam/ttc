// 递归终止条件
// 处理本层逻辑
// 拆分子问题，向下递归
// 组合子问题
// 清理本层状态

// https://leetcode-cn.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const ans = [];
    // 当前位置 总数 单个组合大小 收集组合内容
    const dfs = (cur, n, k, temp) => {
        // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        // 记录合法的答案
        if (temp.length == k) {
            ans.push(temp);
            return;
        }
        // 考虑选择当前位置
        dfs(cur + 1, n, k, [...temp, cur]);
        // 考虑不选择当前位置
        dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return ans;
};
 
// https://leetcode-cn.com/problems/permutations/
// 不含重复数字的全排列
var permute = (nums) => {
    let res = [];
    let output = [...nums];
    let n = nums.length;
    backtrack(n, output, res, 0);
    return res;
}

var backtrack = (n, output, res, first) => {
    // 所有数都填完了
    if (first == n) {
        res.push(output.join().split(','));
    }
    for (let i = first; i < n; i++) {
        // 动态维护数组
        swap(output, first, i);
        // 继续递归填下一个数
        backtrack(n, output, res, first + 1);
        // 撤销操作
        swap(output, first, i);
    }
}

var swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
 
// https://leetcode-cn.com/problems/permutations-ii/
// 含重复数字的全排列

var backtrack = (n, output, res, first, temp) => {
    // 所有数都填完了
    if (first == n) {
     if(!temp.has(output.join())) {
            res.push(output.join().split(','));
        }
        temp.add(output.join());
    }
    for (let i = first; i < n; i++) {
        if(output[i] === output[first] && i !== first) {
            continue;
        }
        // 动态维护数组
        swap(output, first, i);
        // 继续递归填下一个数
        backtrack(n, output, res, first + 1, temp);
        // 撤销操作
        swap(output, first, i);
    }
}

var permuteUnique = (nums) => {
    let temp = new Set();
    let res = [];
    let output = [...nums.sort((a, b) => a - b)];
    let n = nums.length;
    backtrack(n, output, res, 0, temp);
    return res;
}

var swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// https://leetcode-cn.com/problems/powx-n/
// 分治
var myPow = (x, n) => {
    let N = n;
    return N >= 0
        ? quickMul(x, N)
        : 1.0 / quickMul(x, -N);
}

var quickMul = (x, N) => {
    if (N == 0) {
        return 1.0;
    }
    let y = quickMul(x, N / 2);
    return N % 2 == 0
        ? y * y
        : y * y * x;
}

// https://leetcode-cn.com/problems/subsets/
// 分治
var subsets = function(nums) {
    const t = [];
    const ans = [];
    const n = nums.length;
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1, nums);
        t.pop(t.length - 1);
        dfs(cur + 1, nums);
    }
    dfs(0, nums);
    return ans;
};

// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = (digits) => {
    let combinations = [];
    if (digits.length == 0) {
        return combinations;
    }
    let phoneMap = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz",
    };
    backtrack(combinations, phoneMap, digits, 0, '');
    return combinations;
}

var backtrack = (combinations, phoneMap, digits, index, combination) => {
    if (index == digits.length) {
        combinations.push(combination);
    } else {
        let digit = digits[index];
        let letters = phoneMap[digit];
        let lettersCount = letters.length;
        for (let i = 0; i < lettersCount; i++) {
            backtrack(combinations, phoneMap, digits, index + 1, combination + letters[i]);
        }
    }
}

// https://leetcode-cn.com/problems/n-queens/
var solveNQueens = (n) => {
    let solutions = [];
    let queens = new Array(n);
    queens.fill(-1);
    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();
    backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2);
    return solutions;
}

var backtrack = (solutions, queens, n, row, columns, diagonals1, diagonals2) => {
    if (row == n) {
        let board = generateBoard(queens, n);
        solutions.push(board);
    } else {
        for (let i = 0; i < n; i++) {
            if (columns.has(i) || diagonals1.has(row - i) || diagonals2.has(row + i)) {
                continue;
            }
            
            queens[row] = i;
            columns.add(i);
            diagonals1.add(row - i);
            diagonals2.add(row + i);
            backtrack(solutions, queens, n, row + 1, columns, diagonals1, diagonals2);
            queens[row] = -1;
            columns.delete(i);
            diagonals1.delete(row - i);
            diagonals2.delete(row + i);
        }
    }
}

let generateBoard = (queens, n) => {
    let board = [];
    for (let i = 0; i < n; i++) {
        let row = new Array(n);
        row.fill('.');
        row[queens[i]] = 'Q';
        board.push(row.join(''));
    }
    return board;
}
