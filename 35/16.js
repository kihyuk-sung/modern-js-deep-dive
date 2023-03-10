function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3));
