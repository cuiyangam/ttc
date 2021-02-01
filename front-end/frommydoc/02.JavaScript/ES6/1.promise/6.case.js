let Promise = require('./6.promise');
let fs = require('fs');

function read(url) {
  // Q 库的写法; bluebird还有 promisify方法，专门用于包装node异步接口
  let dfd = Promise.defer();
  fs.readFile(url, "utf8", function (err, data) {
    if (err) dfd.reject(err);
    dfd.resolve(data);
  });
  return dfd.promise;
};

read("./1.case.js").then(
  (data) => { console.log(data); }
).catch(
  (err) => { 
    console.log("oh", err); 
    return Promise.reject("失败"); 
  }
).finally(
  () => { console.log("finally is here!"); }
).then(
  (value) => {console.log("hei", value);},
  (reason) => {console.log("opps", reason);}
);