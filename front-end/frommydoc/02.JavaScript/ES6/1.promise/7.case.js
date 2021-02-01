let Promise = require('./7.promise');
let fs = require("fs");
// Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
//   (data) => {console.log(data);}
// );

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, 'two');
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
  return value;
  // Both resolve, but promise2 is faster
}).then(
  (value)=> {console.log("oh", value)},
  (reason)=> {console.log("opps", reason)}
);
