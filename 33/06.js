const mySymbol = Symbol();

console.log(!!mySymbol === true);

if (mySymbol) {
  console.log('mySymbol is true');
}
