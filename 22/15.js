const person = {
  name: 'Lee',
  getName() {
    return this.name;
  }
};

console.log(person.getName());

const anotherPerson = {
  name: 'Kim',
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName());

const getName = person.getName;

console.log(getName());
