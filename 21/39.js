var x = 10;
function foo() {
  y = 20;
  console.log(x + y);
}

foo();

console.log(window.x);
console.log(window.y);
delete x;
delete y;

console.log(window.x);
console.log(window.y);
