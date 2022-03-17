class Person {
  name = 'Lee'
  sayHi() {
    console.log(`Hi! ${this.name}`);
  }
}

const person = new Person('Lee');
person.sayHi();
