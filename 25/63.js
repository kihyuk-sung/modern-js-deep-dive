class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {}

const derived = new Derived(1, 2);
console.log(derived);
