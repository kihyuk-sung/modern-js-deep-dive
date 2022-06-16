function sum() {
  const arr = [...arguments];
  console.log(arr);
  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));
