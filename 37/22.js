Set.prototype.difference = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.delete(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.difference(setB));
console.log(setB.difference(setA));
