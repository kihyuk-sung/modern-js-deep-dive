const str = 'Hello World';

console.log(str.substring(0, str.indexOf(' ')) === 'Hello');
console.log(str.substring(str.indexOf(' ') + 1, str.length) === 'World');
