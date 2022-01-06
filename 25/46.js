class Person {
  name = 'Lee';
  getName = function () {
    return this.name;
  }
}

const me = new Person('Lee');
console.log(me);
console.log(me.getName());
