let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); //true

//console.log(obj.toString());

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto);

function Person(name) {
  this.name = name;
}

obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);
