const a = {
  [Symbol.iterator]() { return this; },
  next() {
    return { value: any, done: Boolean };
  }

};
