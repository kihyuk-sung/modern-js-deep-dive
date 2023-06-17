new Promise(resolve => resolve('fulfilled'))
  .then(console.log, console.error);

new Promise((_, reject) => reject(new Error('rejected')))
  .then(console.log, console.error);

