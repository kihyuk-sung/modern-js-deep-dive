const target = 'AA BB 12,345';

const regExp = /[\d,]+/g;

console.log(target.match(regExp));

const regExp2 = /[\D,]+/g;

console.log(target.match(regExp2));
