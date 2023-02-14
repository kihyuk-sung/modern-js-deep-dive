const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      }
    };
  }
};

const arr = [...fibonacci];
console.log(arr);

const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);
