const mySymbol = Symbol('mySymbol');

console.log(mySymbol.description === 'mySymbol');
console.log(mySymbol.toString() === 'Symbol(mySymbol)');
