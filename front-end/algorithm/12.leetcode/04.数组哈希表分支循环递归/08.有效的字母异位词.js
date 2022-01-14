/**
 * 242. 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 */

/**
 * 用字母的asc码相关的数值做key，用该字母出现的次数做value，用序列化后的values判定异位词
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return count(s) === count(t);
};

const count = (s) => {
    let map = new Array(26).fill(0);
    const baseCode = 'a'.charCodeAt();
    s.split('').forEach(element => {
        const relaCode = element.charCodeAt() - baseCode;
        map[relaCode] = map[relaCode] + 1;
    });
    return map.join('');
}
