const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy);
console.log(obj === copy);

const merged = { x: 1, y: 2, ... { a: 3, b: 4 } };
console.log(merged);
