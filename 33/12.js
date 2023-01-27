const obj = {
  [Symbol.for('mySymbol')]: 1
};

console.log(obj[Symbol.for('mySymbol')] === 1);
