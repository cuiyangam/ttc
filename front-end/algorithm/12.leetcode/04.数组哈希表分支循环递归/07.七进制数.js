/**
 * 504. 七进制数
 * https://leetcode-cn.com/problems/base-7/
 */

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num < 0) {
        return '-' + convertToBase7(Math.abs(num))
    }
    let [devide, rest] = oper(num);
    let res = [rest];

    while (devide > 0) {
        num = devide;
        [devide, rest] = oper(num);
        res.push(rest);
    }

    return res.reverse().join('')
};

function oper(num) {
    let devide = Math.floor(num / 7);
    let rest = num - devide * 7;
    return [devide, rest];
}
