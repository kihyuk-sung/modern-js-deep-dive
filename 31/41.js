const target = 'abc#123';

const regExp = /[^A-Za-z0-9]/gi

console.log(target.replace(regExp, '') === 'abc123');
