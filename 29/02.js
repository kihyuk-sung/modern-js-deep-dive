console.log(Math.abs(-1) === 1);
console.log(Math.abs('-1') === 1);
console.log(Math.abs('') === 0);
console.log(Math.abs([]) === 0);
console.log(Math.abs(null) === 0);
console.log(isNaN(Math.abs(undefined)));
console.log(isNaN(Math.abs({})));
console.log(isNaN(Math.abs('string')));
console.log(isNaN(Math.abs()));

