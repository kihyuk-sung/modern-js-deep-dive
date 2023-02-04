const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj);

for (const item of obj) {
  console.log(item);
}

const [a, b] = obj;
