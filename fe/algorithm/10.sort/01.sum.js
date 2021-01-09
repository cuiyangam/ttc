/**
 * 求和，不使用四则运算符
 * 原理: a+b = (a^b) + ((a&b) << 1)
 * ---> 将a, b拆解为不相同的位x与 相同的位y，则为x + y << 1
 */
module.exports = function sum(a, b){
  if(a === 0) return b;
  if(b === 0) return a;
  let x = a ^ b;
  let y = (a & b) << 1;
  return sum(x, y);
}

