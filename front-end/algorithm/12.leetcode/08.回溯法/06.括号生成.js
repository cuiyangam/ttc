/**
 * 22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 */

/**
 * 回溯就是一种递归
 *   每层递归增加一个括号，不外乎增加左括号或者右括号
 *   如果是增加左括号，需要满足，已添加的左括号数小于括号对数
 *   如果是增加右括号，需要满足，已添加的右括号小于已添加的左括号，并且小于括号对数
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let r = [];
    gen(0, 0, n, '', r);
    return r;
};
/**
 * 
 * @param {*} left 已使用的左括号数量
 * @param {*} right 已使用的右括号数量
 * @param {*} n 括号对数
 * @param {*} s 在当前左右括号数目下，生成的字符串
 * @param {*} r 收集所有结果的数组
 */
var gen = function (left, right, n, s, r) {
    if (left === n && right === n) {
        r.push(s);
    }
    if (left < n) {
        gen(left + 1, right, n, s + '(', r);
    }
    if (left > right) {
        gen(left, right + 1, n, s + ')', r);
    }
}
