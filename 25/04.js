class Person {
  constructor(name) {
    this.name = name;
  }

  // prototype method
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // static method
  static sayHello() {
    console.log('Hello!');
  }
}

const me = new Person('Lee');

console.log(me.name);
me.sayHi();
Person.sayHello();
