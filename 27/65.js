const arr = [1, 2, 3, 1, 2];

function remove(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
  return array;
}

console.log(remove(arr, 2));
console.log(remove(arr, 10));
