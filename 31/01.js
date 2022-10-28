const tel = '010-1234-567팔';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel) === false);
