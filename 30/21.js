const today = new Date();
today.setSeconds(30);

console.log(today.getSeconds() === 30);

today.setSeconds(10, 0);
console.log(today.getSeconds() === 10);
