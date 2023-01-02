const str = 'Hello World';

console.log(str.substring(0, 5) === 'Hello');
console.log(str.slice(0, 5) === 'Hello');

console.log(str.substring(2) === 'llo World');
console.log(str.slice(2) === 'llo World');

console.log(str.substring(-5) === 'Hello World');
console.log(str.slice(-5) === 'World');
