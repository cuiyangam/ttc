let {mergeSort, quickSort, findKth, heapSort} = require('./03.sortFunc');

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
console.log (mergeSort(a));
console.log (a);
console.timeEnd('asd1');
console.log (isCorrect(num1));

console.time('asd2');
let a2 = [4,2,5,1,5,8,0];
console.log (quickSort(a2));
console.log (a2);
console.timeEnd('asd2');

let a3 = [4,2,5,1,5,8,0];
console.log (findKth(a3, 3));


console.log (heapSort([1,9,5,8,7]));

var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
function binarySearch (arr, val) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt( (low + high) / 2 );
        if (val == arr[mid]) {
            return mid;
        }else if (val > arr[mid]) {
            low = mid + 1;
        }else if (val < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1;
};  
console.log( binarySearch(arr, 3) );


