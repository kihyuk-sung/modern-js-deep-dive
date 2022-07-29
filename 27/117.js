const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, new Map());

console.log(count);
