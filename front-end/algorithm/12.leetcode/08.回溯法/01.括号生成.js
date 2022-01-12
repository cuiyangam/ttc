/**
 * 22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 */

var generateParenthesis = function (n) {
    let r = [];
    gen(0, 0, n, '', r);
    return r;
};
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
