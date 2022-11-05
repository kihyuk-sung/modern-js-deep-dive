const target = 'Is this all there is?';
const regExp = /is/;

console.log(regExp.test(target) === true);
console.log(target.match(regExp));
