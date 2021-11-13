function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };
console.log(getThisBinding.bind(thisArg));
console.log(getThisBinding.bind(thisArg)());
