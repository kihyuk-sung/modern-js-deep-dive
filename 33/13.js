const obj = {
  [Symbol('mySymbol')]: 1
};

for (const key in obj) {
  console.log(key);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
