const numbers = [1, 2, 3];
numbers.forEach((item, index, arr) => { arr[index] = item ** 2; });
console.log(numbers);
