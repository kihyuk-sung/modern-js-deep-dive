const person = (name => ({
  sayHi() { return `Hi? My name is ${name}.`;}
}))('Lee');

console.log(person.sayHi());
