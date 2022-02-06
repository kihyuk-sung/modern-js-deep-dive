var obj = {
  x: 10,
  f: function () {
    return this.x;
  }
};

console.log(obj.f());

var bar = obj.f;
console.log(bar());

console.log(new obj.f());
