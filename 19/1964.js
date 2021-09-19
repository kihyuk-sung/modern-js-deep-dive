const person = {
  name: 'Lee',
  address: 'Seoul'
}

console.log('toString' in person); // true

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 이때 toString은 순회하지 않는다

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
