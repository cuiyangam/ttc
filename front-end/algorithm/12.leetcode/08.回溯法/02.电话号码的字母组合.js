/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

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
