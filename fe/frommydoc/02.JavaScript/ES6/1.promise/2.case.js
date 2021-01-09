let Promise = require('./2.promise');

let p = new Promise(
  (resolve, reject) => {
    throw new Error("fail");
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  }
);
p.then(
  (value) => { console.log("value", value); },
  (reason) => { console.log("reason", reason); }
);

p.then(
  (value) => { console.log("value2", value); },
  (reason) => { console.log("reason2", reason); }
);