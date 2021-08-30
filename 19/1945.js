function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

const parent = {
  constructor: Person,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

Person.prototype = parent;
Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person);
console.log(me.constructor === Object);

console.log(Person.prototype === Object.getPrototypeOf(me));
