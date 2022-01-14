/**
 * 151. 翻转字符串里的单词
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 */

/**
 * 懒得细粒度操作，直接用js提供的api 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim()
        .split(" ")
        .map(word => word.trim())
        .filter(word => word.length > 0)
        .reverse().join(" ");
};
