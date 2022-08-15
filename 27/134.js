const arr = ['hello', 'world'];
const mapper = (str, index) => [index, [str, str.length]]
console.log(arr.flatMap(mapper));
console.log(arr.map(mapper).flat(2));
