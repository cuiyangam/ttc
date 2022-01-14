/**
 * 504. 七进制数
 * https://leetcode-cn.com/problems/base-7/
 */

/**
 * n进制数的求法，将数字不断除以n，余数保存，商继续除以n
 * 最后将保存余数的数组翻转就是转换为n进制数的结果
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
        [devide, rest] = oper(devide);
        res.push(rest);
    }

    return res.reverse().join('')
};

function oper(num) {
    let devide = Math.floor(num / 7);
    let rest = num - devide * 7;
    return [devide, rest];
}
