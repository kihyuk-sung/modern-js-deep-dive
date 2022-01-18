class Base {
  constructor() {}
}

class Derived extends Base {
  constructor(...args) {
    super(...args);
  }
}

const derived = new Derived();
console.log(derived);
