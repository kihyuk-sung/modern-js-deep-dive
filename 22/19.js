function getThisBind() {
  return this;
}

const thisArg = { a: 1 };
console.log(getThisBind());
console.log(getThisBind.apply(thisArg));
console.log(getThisBind.call(thisArg));
