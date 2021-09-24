(function () {
  'use strict';

  function foo() {
    console.log(this);
  }
  foo();

  function Foo() {
    console.log(this);
  }
  new Foo();
}());
