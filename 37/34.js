const map = new Map();

console.log(NaN === NaN);
console.log(0 === -0);

map.set(NaN, 'value1').set(NaN, 'value2');
console.log(map);

map.set(0, 'value1').set(-0, 'value2');
console.log(map);

