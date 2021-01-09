let name = 'zfpx'
let age = 9;

let str = "${name}今年${age}岁了";// 写一个模板引擎的实现
let newStr = str.replace(/\$\{([\s\S]*?)\}/g,function () {
  return eval(arguments[1])
});
console.log(newStr); // 模板引擎实现 拼字符串 替换变量
// let str = name+'\'今年\''+age+'岁';
// console.log(str);