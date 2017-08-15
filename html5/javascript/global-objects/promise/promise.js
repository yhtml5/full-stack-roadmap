var promise = new Promise(function (resolve, reject) {

  /* 异步操作成功 */
  if (true) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function (value) {
  // success
}, function (error) {
  // failure
});


function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, ms);
    console.log(ms)
  });
}

timeout(500)
  .then((value) => {
    console.log(value);
    return timeout(value + 1)
  })
  .then((value) => {
    console.log(value);
    return timeout(value + 1)
  })
  .then((value) => {
    console.log(value);
    return timeout(value + 1)
    console.log('done');
  })
  .then(() => console.log('done'))
  .catch(function (err) {
    throw new Error(err);
  })

  (async function (params) {
    let value = 100
    await timeout(value)
    value = value + 1
    await timeout(value)
    value = value + 1
    await timeout(value)
  })()