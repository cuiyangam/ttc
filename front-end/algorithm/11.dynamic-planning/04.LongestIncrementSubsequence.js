/**
 * 最长递增子序列 LongestIncrementSubsequence
 */
function lis(n) {
  if (n.length === 0) return 0;
  let maxlis = new Array(n.length).fill(1)  // 都初始化为 1，因为自身自然有序，长度为 1
  for (let i = 1; i < n.length; ++i) {  // 从数组 n 的第 2 项开始遍历
    for (let j = 0; j < i; j++) {  // 遍历范围: [0, i)
      if (n[i] > n[j]) {  // 如果由 j 到 i 是增
        maxlis[i] = Math.max(maxlis[i], maxlis[j] + 1);  // 则如果 j 处的lis + 1 大于原来，则更新
      }
    }
  }
  let res = 1;
  let index = 0;  // 取得最长递增子序列的最后一项的下标,求出构成最长递增子序列的项时用
  for (let i = 0; i < maxlis.length; i++) {
    if(maxlis[i] > res){
      res =  maxlis[i];
      index = i;
    }
  }

  // 求出构成最长递增子序列的项
  let str = [];
  str.unshift(n[index]);
  for (let i = index - 1; i > 0 ; --i) {
    if(maxlis[i]  === maxlis[i + 1] - 1 && n[i] <= n[i + 1]){
      str.unshift(n[i]);
    }
  }

  return {res, str}
}
console.log (lis([2, 0, 1, 3, 4, 17,  8, 6, 10]));

