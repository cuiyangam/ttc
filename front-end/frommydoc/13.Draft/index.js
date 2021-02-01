// if([] == false) { console.log(1)};
// if({} == false) { console.log(2)};
// if([]) { console.log(3)};
// if([1] == [1]) { console.log(4)};


// async function async1() {
//   console.log('async1 start');// 2
//   await async2();
//   console.log('async1 end');// 4
// }
// async function async2() {
//   console.log('async2');// 3
// }
// console.log('script start'); // 1
// setTimeout(function() {
//   console.log('setTimeout');// 8
// }, 0);
// async1();
// new Promise(function (resolve, reject){
//   console.log('promise1');// 5
//   resolve();
// }).then(function() {
//   console.log('promise2');// 7
// });
// console.log('script end');// 6

// script start
// index.js:8 async1 start
// index.js:13 async2
// index.js:21 promise1
// index.js:26 script end
// index.js:10 async1 end
// index.js:24 promise2
// index.js:17 setTimeout

// const obj = { 
//   name: " jsCoder",
//   skill: ["es6", "react", 'angular'],
//   say: function() {
//     for(let i = 0, len = this.skill.length; i < len; i++) {
//       setTimeout(() => {
//         console.log('No.' + (i + 1) + this.name);
//         console.log(this.skill[i]);
//         console.log('------------------')
//       }, 0);
//       console.log(i + 1);
//     }
//   }
// }
// obj.say() 


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => { reject('server error 500'); },
      200,
    );
  })
}

function retry(fn, times, delay) {
  return new Promise((resolve, reject) => {
    function attempt() {
      times--;
      fn()
        .then(data => resolve(data))
        .catch(err => {
          console.log(`Last ${times} times to try` );
          if(0 === times) {
            reject('has retried many times');
          } else {
            setTimeout(() => attempt(), delay);
          }
        })
    }
    attempt();
  });
}

retry(fetchData, 3, 100).catch(e => {console.log(e, 1)});