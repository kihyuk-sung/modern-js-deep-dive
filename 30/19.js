const today = new Date();

today.setMinutes(50);
console.log(today.getMinutes() === 50);

today.setMinutes(5, 10, 999);
console.log(today.getMinutes() === 5);
