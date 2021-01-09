// 3.generator适合用来实现类数组的迭代器
let arrayLike = {
  0: 1, 1:2,2:3,length:3,[Symbol.iterator]: function *(){
    let index = 0;
    while(index !== this.length){
      yield this[index++];
    }
  }
}
console.log([...arrayLike]);


// 4.实现 co 库
function co(it){
  return new Promise(
    (resolve, reject) => {
      function next(data){
        let { value, done} = it.next(data);
        if(!done){
          next(value);
        }else{
          resolve(value);
        }
      }
      next();
    }
  );
}

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}
var a = foo(5);
co(a).then(
  (data) => { console.log(data); }  
)
// 21 
// 真正跟async/await一样的效果
