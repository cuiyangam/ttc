let Promise = require('./4.promise');

let p = new Promise(
  (resolve, reject) => {
    // resolve("ok");  /**此处为同步的时候，检测不到“循环引用”，所以下个版本在new promise2的时候内部加了setTimeout */
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  }
);
let promise2 = p.then(
  // () => {throw(new Error("出错了"));}
  (value) => { return new Promise((resolve, reject) => { resolve(1000); }) }
).then(
  (data) => { return data + 2000; },
  (err) => { console.log("opp", err); }
).then(
  (data) => { console.log(data); },
  (err) => { console.log("opps", err); }
)

// 原生promise.then返回一个新的promise
// Promise.reject().then(
//   null,
//   (reason) => {return 100;}
// ).then(
//   (data) => {console.log(data);},
//   (err) => {}
// );