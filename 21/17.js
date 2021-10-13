const x = 1;
function foo() {
  eval('var x = 2;');
  console.log(x);
}

foo();
console.log(x);
