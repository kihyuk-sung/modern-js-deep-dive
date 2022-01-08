class Person {
  #name = '';
  constructor(name) {
    this.#name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.#name}.`);
  }
}

const me = new Person('Lee');
me.sayHi();

console.log(me.#name);
