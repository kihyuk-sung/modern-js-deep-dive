const arr1 = [3, 4];
arr1.shift(1, 2);
console.log(arr1);

arr1.push(5, 6);
console.log(arr1);

const arr2 = [3, 4];
let result = [1, 2].concat(arr2);
console.log(result);

result = result.concat(5, 6);
console.log(result);
