class MyArray extends Array {
  static get [Symbol.species]() {return Array;}

  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0);
  }
}

const myArray = new MyArray(1, 2, 3, 1);
console.log(myArray.uniq() instanceof MyArray);
console.log(myArray.uniq() instanceof Array);
console.log(myArray.uniq().average());
