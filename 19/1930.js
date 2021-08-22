function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
