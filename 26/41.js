function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person = new Person('Lee');
person.sayHi()
