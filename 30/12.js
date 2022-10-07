const today = new Date();

today.setMonth(0);
console.log(today.getMonth() === 0);

today.setMonth(11, 1);
console.log(today.getMonth() === 11);
