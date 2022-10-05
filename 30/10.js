const today = new Date();

today.setFullYear(2000);
console.log(today.getFullYear() === 2000);

today.setFullYear(1900, 0, 1);
console.log(today.getFullYear() === 1900);
