const x = 1;
function foo() {
  eval('var x = 2; console.log(x);'); // 2
  eval('const x = 3; console.log(x);'); // 3
  console.log(x); // 2
}
foo();
console.log(x); // 1
