Set.prototype.isSuperset = function (subset) {
  const superset = [...this];
  return [...subset].every(v => superset.includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));
