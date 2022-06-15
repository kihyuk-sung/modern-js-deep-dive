function sum() {
  const arr = Array.from(arguments);
  console.log(arr);
  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));
