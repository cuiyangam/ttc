let url = '/user/:id/:name'; // 配置的路径 
let str = '/user/1/2';  // 请求的路径

// 1.在 localStorage配置 login:true
// 2.https://www.npmjs.com/package/path-to-regexp
let pathToRegExp = require('path-to-regexp');
let keys = []
let reg = pathToRegExp(url, keys, { end: true }); //end: When true the regexp will match to the end of the string. (default: true)
keys = keys.map(k => k.name);
console.log(keys);
let [, ...args] = (str.match(reg))
console.log(args);

let r = keys.reduce((memo, key, index) => (memo[key] = args[index], memo), {});
console.log(r);