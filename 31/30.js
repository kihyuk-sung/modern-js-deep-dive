const url = 'https://example.com';

const regExp = /^https?:\/\//
console.log(regExp.test(url) === true);
console.log(/^(http|https):\/\//.test(url) === true);
