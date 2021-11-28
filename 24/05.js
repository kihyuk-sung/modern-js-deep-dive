const x = 1;
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };

  return inner;
}
const innerFunction = outer();
innerFunction();
