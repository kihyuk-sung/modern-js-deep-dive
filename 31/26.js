const target = 'Aa Bb 12,345 _$%&';

const regExp = /[\w,]+/g;

console.log(target.match(regExp));
const regExp1 = /[\W,]+/g;

console.log(target.match(regExp1));

