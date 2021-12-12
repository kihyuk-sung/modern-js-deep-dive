const Person = (function () {
  // 모든 Person은 _age를 공유
  let _age = 0;
  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  };

  return Person;
}());

const me = new Person('Lee', 20);
me.sayHello();
console.log(me.name);
console.log(me._age);

const you = new Person('Kim', 30);
you.sayHello();
console.log(you.name);
console.log(you._age);

// me의 _age가 변경됐다.
me.sayHello();
