Set.prototype.intersection = function (set) {
  const result = new Set();
  for (const value of set) {
    if (this.has(value)) result.add(value);
  }

  return result;
};

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 4]);

console.log(a.intersection(b));
console.log(b.intersection(a));
