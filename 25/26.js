class Person {
  constructor(name) {
    this.name = name;
  }

  static sayHi() {
    console.log(`Hi!`);
  }
}

Person.sayHi();

// 메서드 방식으로 선언했으므로, 생성자로 사용할 수 없다.
// new Person.sayHi();
const me = new Person('Lee');
me.sayHi();
