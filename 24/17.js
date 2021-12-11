function Person(name, age) {
  this.name = name;
  let _age = age;
}

// _age에 접근 불가능
Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}`);
};
