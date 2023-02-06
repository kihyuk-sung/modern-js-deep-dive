const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log('next' in iterator);
