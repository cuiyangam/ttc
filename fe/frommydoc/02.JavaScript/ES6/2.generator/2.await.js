// 2.async/await实现原理

function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const it = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        (v) => {
          step(() => { return it.next(v); });  // 递归调用,同时把异步1 的结果传递给异步2
        },
        (e) => {
          step(() => { return it.throw(e); });  // 递归调用,走到catch中，reject 掉 promise
        }
      );
    }
    step(() => {return it.next(undefined);});
  });
}
// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function asyncPrint(value, ms) {
  return spawn(function* () {
    yield timeout(ms);
    console.timeEnd("start");
    console.log(value);
  })
}
console.time("start");
asyncPrint('hello world', 5000);