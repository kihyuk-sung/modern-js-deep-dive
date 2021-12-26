function Person(name) {
  this.name = name;
}

Person.sayHi = function () {
  console.log('Hi!');
};

Person.sayHi();

new Person.sayHi();
