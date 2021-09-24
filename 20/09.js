(function () {
  'use strict';

  var x = 1;
  delete x;
  function foo(a) {
    delete a;
  }

  delete foo;
}());
