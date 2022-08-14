const arr = ['hello', 'world'];
console.log(arr.map(x => x.split('')).flat());
console.log(arr.flatMap(x => x.split('')));
