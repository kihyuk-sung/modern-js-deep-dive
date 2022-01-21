class Base {}

class Derived extends Base {
  constructor() {
    console.log('constructor call');
  }
}

const derived = new Derived();
