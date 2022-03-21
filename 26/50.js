function foo(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo(1, 2, 3, 4, 5)

function bar(param1, param2, ...rest) {
  console.log(param1);
  console.log(param1);
  console.log(rest);
}

bar(1, 2, 3, 4, 5)
