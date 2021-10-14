const x = 1;
function foo() {
  'use strict';
  eval('var x = 2; console.log(x);');
  console.log(x);
}
foo();
console.log(x);
