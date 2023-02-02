const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

console.log(isIterable([]));
console.log(isIterable(''));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));
