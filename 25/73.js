class Base {
  static sayHi() {
    return `Hi!`;
  }
}

class Derived extends Base {
  static sayHi() {
    return `${super.sayHi()} how are you doing?`;
  }
}

console.log(Derived.sayHi());
