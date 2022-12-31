const str = 'Hello World';

console.log(str.substring(4, 1) === 'ell');
console.log(str.substring(-2) === 'Hello World');
console.log(str.substring(1, 100) === 'ello World');
console.log(str.substring(20) === '');
