[1, 2, 3].filter((item, index, arr) => {
  console.log(item, index, arr);
  return item % 2;
});
