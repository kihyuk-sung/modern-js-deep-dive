const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values.reduce((acc, cur, i, arr) => {
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

console.log(result);
