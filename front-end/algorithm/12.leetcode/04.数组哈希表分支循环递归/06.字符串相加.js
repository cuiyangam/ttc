/**
 * 415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 */

/**
 * 字符串分割为数组，不气较短的数组，从个位依次相加，注意进位
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res = [];
    let n1 = num1.split('').map(num => parseInt(num, 10));
    let n2 = num2.split('').map(num => parseInt(num, 10));
    let over = 0;
    if(n1.length > n2.length) {
        n2.unshift(...(new Array(n1.length - n2.length).fill(0)));
    } else {
        n1.unshift(...(new Array(n2.length - n1.length).fill(0)));
    }

    let len = n1.length - 1;
    while (len > -1) {
        let curr = n1[len] + n2[len] + over;
        if (curr < 10) {
            res.push(curr);
            over = 0;
        } else {
            res.push(curr % 10);
            over = 1;
        }
        len--;
    }
    if (over) {
        res.push(over);
    }
    return res.reverse().join('')
};
