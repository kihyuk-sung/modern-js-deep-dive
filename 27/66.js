const arr = [1, 2, 3, 1, 2];
function removeAll(array, item) {
  return array.filter(v => v !== item);
}
console.log(removeAll(arr, 2));
