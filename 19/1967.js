const person = {
  name: 'Lee',
  address: 'Seoul',
  __proto__: {
    age: 20
  }
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log();

for (const key in person) {
  if (!person.hasOwnProperty(key)) continue;
  console.log(`${key}: ${person[key]}`);
}
