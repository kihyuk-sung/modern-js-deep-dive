class Person {
  constructor(name) {
    this.name = name;
  }
}

console.log(typeof Person);
console.dir(Person);

const me = new Person('Lee');
console.log(me);
