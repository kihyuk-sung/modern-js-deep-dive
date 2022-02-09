const obj = {
  x: 1,
  foo() {
    return this.x;
  },
  bar: function () {
    return this.x;
  }
}

console.log(obj.foo());
console.log(obj.bar());

new obj.foo();
new obj.bar();
