const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));

map.size = 10;
console.log(map.size);
