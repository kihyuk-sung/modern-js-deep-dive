const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('result');
  } else {
    reject('failure reason');
  }
});
