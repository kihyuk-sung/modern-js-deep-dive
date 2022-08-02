const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result);
