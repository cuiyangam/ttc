/**
 * 递归需要满足的三个条件
 * 1. 一个问题的解可以分解为几个子问题的解
 * 2. 这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样
 * 3. 存在递归终止条件
 * 
 * 写递归代码最关键的是写出递推公式，找到终止条件
 */

/**
 * 电影院查找当前第几排的问题
 * 递推公式: f(n)=f(n-1)+1; f(1)=1;
 */

function xth(n) {
  if (n === 1) return 1;
  return xth(n - 1) + 1;
}

function xth2(n) {
  let value = 1;
  for(let i = 2; i <=n; i++){
    value += 1;
  }
  return value;
}

console.log(xth(3));
console.log(xth2(3));

/**
 * n个台阶，每次跨1个台阶或者2个台阶，求总的走法
 * 递推公式: f(n)=f(n-1)+f(n-2); f(2)=2; f(1)=1;
 */

function steps(n) {
  if(n === 1) return 1;
  if(n === 2) return 2;
  return steps(n-1) + steps(n-2);
}

function steps2(n){
  if(n === 1) return 1;
  if(n === 2) return 2;
  let one = 1;
  let two = 2;
  let temp;
  for(let i = 3; i <= n; i++){
    temp = one + two;
    one = two;
    two = temp;
  }
  return temp;
}
console.log (steps(6));
console.log (steps2(6));