const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged);

const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed);

const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(added);
