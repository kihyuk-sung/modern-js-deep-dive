const Counter = (function () {
  let num = 0;
  function Counter() {
    // this.num = 0;
  }
  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };
  return Counter;
}());
const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
