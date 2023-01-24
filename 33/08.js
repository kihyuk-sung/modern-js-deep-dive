const s1 = Symbol.for('mySymbol');

console.log(Symbol.keyFor(s1) === 'mySymbol');

const s2 = Symbol('foo');

console.log(Symbol.keyFor(s2) === undefined);
