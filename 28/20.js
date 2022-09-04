console.log(Number.isSafeInteger(0) === true);
console.log(Number.isSafeInteger(1_000_000_000_000_000) === true);
console.log(Number.isSafeInteger(1_000_000_000_000_000_1) === false);
console.log(Number.isSafeInteger(0.5) === false);
console.log(Number.isSafeInteger('123') === false);
console.log(Number.isSafeInteger(false) === false);
console.log(Number.isSafeInteger(Infinity) === false);
