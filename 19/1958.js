function Foo() { }

Foo.prototype.x = function () {
  console.log('x');
};

const foo = new Foo();

foo.x();


Foo.x = function () {
  console.log('x');
}

Foo.x();
