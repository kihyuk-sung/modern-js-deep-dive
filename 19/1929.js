function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My Name is ${this.name}`);
};

const me = new Person('Lee');

console.log(me.hasOwnProperty('name'));
