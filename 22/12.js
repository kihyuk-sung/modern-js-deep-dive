var value = 1;
const obj = {
  value: 100,
  foo() {
    setTimeout(function () {
      console.log(this.value);;
    }.bind(this), 100);
  }
};

obj.foo();
