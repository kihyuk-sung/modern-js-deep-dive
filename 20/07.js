(function () {
  var let = 10;
  function foo() {
    'use strict';
    let = 20; // unexpected strct mode reserved word
  }
  foo();
}());
