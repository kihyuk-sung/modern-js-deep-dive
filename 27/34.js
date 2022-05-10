const arr = [0];

arr[1] = 1;

console.log(arr);
console.log(arr.length);

arr[100] = 199;

console.log(arr);
console.log(arr.length);

console.log(Object.getOwnPropertyDescriptors(arr));
arr[1] = 10
console.log(arr);
