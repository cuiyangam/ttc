/**
 * 415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let n1 = num1.split('').map(num => parseInt(num, 10));
    let n2 = num2.split('').map(num => parseInt(num, 10));
    let res = [];
    let over = 0;
    let [p1, p2] = [n1.length - 1, n2.length - 1];
    while (p1 > -1 || p2 > -1) {
        let curr = (n1[p1--] || 0) + (n2[p2--] || 0) + over;
        if (curr < 10) {
            res.push(curr);
            over = 0;
        } else {
            over = 1;
            res.push(curr % 10);
        }
    }
    if (over) {
        res.push(over);
    }
    return res.reverse().join('')
};
