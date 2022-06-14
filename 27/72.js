function sum() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3));
