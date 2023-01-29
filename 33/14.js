const obj = {
  [Symbol('mySymbol')]: 1
};

for (const key in obj) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(obj));
const key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key] === 1);
