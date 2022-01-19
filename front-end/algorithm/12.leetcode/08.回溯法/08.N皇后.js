/**
 * 51. N 皇后
 * https://leetcode-cn.com/problems/n-queens/
 */

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
