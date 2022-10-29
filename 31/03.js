const target = 'Is this all there is?';

const regExp = new RegExp(/is/i);

console.log(regExp.test(target) === true);
