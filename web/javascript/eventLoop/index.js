const timeA = new Date();
const timeNow = () => new Date() - timeA
console.log(timeNow(), 'script start');
const timeoutA = setTimeout(function () {
  console.log(timeNow(), 'timeoutA');
}, 2000)
const promiseA = new Promise(function (resolve) {
  console.log(timeNow(), 'promiseA');
  resolve()
  console.log(timeNow(), 'promiseA0');
}).then(function () {
  console.log(timeNow(), 'promiseA1');
})
console.log(timeNow(), 'while 1000');
const timeB = new Date();
while (new Date() - timeB < 1000);
Promise.resolve()
  .then(function () {
    console.log(timeNow(), 'promiseB1');
  })
  .then(function () {
    console.log(timeNow(), 'promiseB2');
  })
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(timeNow(), 'timeoutB', i);
  }, 1000 * i);
}
for (let k = 0; k < 5; k++) {
  setTimeout(() => {
    console.log(timeNow(), 'timeoutC', k);
  }, 1000 * k);
}
promiseA.then(() => console.log(timeNow(), 'promiseA3'))
console.log(timeNow(), 'script end');

// for (var j = 5; j < 9; j++) {
//   setTimeout(function (t) {
//     console.log('timeoutC' + t, timeNow());
//   }, 1000 * j, j);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log('timeoutB' + i, timeNow());
//     }, 1000 * i);
//   })(i)
// }


