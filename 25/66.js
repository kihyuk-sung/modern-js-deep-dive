class Base {
}

class Derived extends Base {
  constructor() {
    this.a = 1;
    super();
  }
}

const derived = new Derived();
