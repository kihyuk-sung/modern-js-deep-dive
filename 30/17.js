const today = new Date();

today.setHours(7);
console.log(today.getHours() === 7);

today.setHours(0, 0, 0, 0);
console.log(today.getHours() === 0);
