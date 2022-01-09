class Person {
  #name = '';
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name.trim();
  }
}

const me = new Person('Lee');
console.log(me.name);
