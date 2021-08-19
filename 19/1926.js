const obj = new Object();
obj.x = 1;

console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));
console.log(obj.__proto__);
