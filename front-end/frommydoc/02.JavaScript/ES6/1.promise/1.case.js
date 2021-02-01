let Promise = require('./1.promise');

let p = new Promise(
  (resolve, reject) => {
    reject("notok");
    resolve("ok");
    // 该实现不满足异步resolve的情况，引出2.promise.js
    // setTimeout(() => {
    //   resolve("ok");
    // },1000);
  }
);
p.then(
  (value) => { console.log("value", value); },
  (reason) => { console.log("reason", reason); }
);

p.then(
  (value) => { console.log("value1", value); },
  (reason) => { console.log("reason1", reason); }
);

