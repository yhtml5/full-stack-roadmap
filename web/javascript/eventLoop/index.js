const timeA = new Date();
console.log('script start', new Date() - timeA);

const timeoutA = setTimeout(function () {
  console.log('timeoutA', new Date() - timeA);
}, 2000)

// const promiseA = new Promise(function (resolve) {
//   console.log('promiseA', new Date() - timeA);
//   resolve()
//   console.log('promiseA0', new Date() - timeA);
// })
//   .then(function () {
//     console.log('promiseA1', new Date() - timeA);
//   })
//   .then(function () {
//     console.log('promiseA2', new Date() - timeA);
//   })

// console.log('while 1000');
// const timeB = new Date();
// while (new Date() - timeB < 1000); // 阻塞

// Promise.resolve()
//   .then(function () {
//     console.log('promiseB1', new Date() - timeA);
//   })
//   .then(function () {
//     console.log('promiseB2', new Date() - timeA);
//   })
//   .then(function () {
//     console.log('promiseB3', new Date() - timeA);
//   })


// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000 * i);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log('timeoutB' + i, new Date() - timeA);
//     }, 1000 * i);
//   })(i)
// }

// for (var j = 5; j < 9; j++) {
//   setTimeout(function (t) {
//     console.log('timeoutC' + t, new Date() - timeA);
//   }, 1000 * j, j);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000 * i);
// }

// promiseA
//   .then(() => console.log('promiseA3', new Date() - timeA))

console.log('script end', new Date() - timeA);




