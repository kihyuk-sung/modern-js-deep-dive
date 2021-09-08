const obj = Object.create(null);
obj.a = 1;

console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); //true
