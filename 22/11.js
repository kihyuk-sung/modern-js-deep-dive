var value = 1;

const obj = {
  value: 100,
  foo() {
    const that = this;

    setTimeout(function () {
      console.log(that.value);
    }, 100);
  }
};

obj.foo();
