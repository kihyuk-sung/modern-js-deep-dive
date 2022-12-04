const cellphone = '010-1234-5678';

const regExp = /^\d{3}-\d{3,4}-\d{4}$/;

console.log(regExp.test(cellphone));
