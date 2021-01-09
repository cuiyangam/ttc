/**
 * 最长公共子序列
 * @param {字符串a}      a 
 * @param {字符串a的长度} n 
 * @param {字符串b}      b 
 * @param {字符串b的长度} m 
 * maxlcs[i][j] 标识 a[0..i] 与 b[0..j] 的 maxlcs
 * a[0..i] 标识下标为 1 至 i 的子序列
 */

function lcs(a, n, b, m) {
  let maxlcs = new Array(n);
  for (let i = 0; i < maxlcs.length; ++i) {
    maxlcs[i] = new Array(m);
  }
  // i 标识行, j 标识列
  for (let j = 0; j < m; ++j) {// 初始化第 0 行：a[0..0] 与 b[0..j] 的 maxlcs
    if (a[0] == b[j]) maxlcs[0][j] = 1;
    else if (j != 0) maxlcs[0][j] = maxlcs[0][j - 1];
    else maxlcs[0][j] = 0;
  }
  for (let i = 0; i < n; ++i) {// 初始化第 0 列：a[0..i] 与 b[0..0] 的 maxlcs
    if (a[i] == b[0]) maxlcs[i][0] = 1;
    else if (i != 0) maxlcs[i][0] = maxlcs[i - 1][0];
    else maxlcs[i][0] = 0;
  }
  for (let i = 1; i < n; ++i) { // 填表
    for (let j = 1; j < m; ++j) {
      if (a[i] == b[j]) maxlcs[i][j] = Math.max(
        maxlcs[i - 1][j], maxlcs[i][j - 1], maxlcs[i - 1][j - 1] + 1);
      else maxlcs[i][j] = Math.max(
        maxlcs[i - 1][j], maxlcs[i][j - 1], maxlcs[i - 1][j - 1]);
    }
  }
  console.log (maxlcs);
  return maxlcs[n - 1][m - 1];
}

let a = '1qwrt'
let b = 'qwert'

console.log(lcs(a, 5, b, 5));
