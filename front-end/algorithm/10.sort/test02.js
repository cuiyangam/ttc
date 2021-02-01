let {bubbleSort, insertSort} = require('./02.Sort');

function isCorrect(a){
  for(let i = 0; i < a.length; i++){
    if(a[i] > a[i + 1]){
      return false;
    }
  }
  return true;
}

var num = [];
for(let i = 0; i < 100000; i++){
  num.push(Math.floor(Math.random() * 100000));
}
var num1 = num.slice();
var num2 = num.slice();
var num3 = num.slice();
var num4 = num.slice();
var num5 = num.slice();

// console.time('asd');
// bubbleSort(num);
// console.timeEnd('asd');

console.time('asd1');
let a = [4,2,5,1,5,8,0];
console.log (insertSort(num1));
console.timeEnd('asd1');
console.log (isCorrect(num1));
