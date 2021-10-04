const str = 'hello';
// 이때 임시 객체 생성 후 접근하고 끝
str.name = 'Lee';
// 이 경우 위의 임시 객체와 다른 새로운 객체이므로 undefined이다.
console.log(str.name);
console.log(typeof str, str);
