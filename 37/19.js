Set.prototype.intersection = function (set) {
  return new Set([...this].filter(v => set.has(v)));
};

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 4]);

console.log(a.intersection(b));
console.log(b.intersection(a));
